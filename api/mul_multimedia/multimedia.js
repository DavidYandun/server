const express = require('express');
const router = express.Router();
const queries = require('../../db/mul_multimedia/multimedia.queries');


router.get('/max', (req, res) => {
    queries.getMax().then(data => {
        res.json(data);
    })
});

router.get('/:multimediaid', (req, res, next) => {
    queries.getOne(req.params.multimediaid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/', (req, res, next) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.post('/', (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.post('/upload', function (req, res) {

    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No hay archivos subidos.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let file = req.files.file;
    let name = req.body.name;
    // Use the mv() method to place the file somewhere on your server
    file.mv('./images_collection/' + name + '.jpg', function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({
            status: 'Imagen cargada'
        });
    });
});

router.put('/:multimediaid', (req, res, next) => {
    queries.update(req.params.multimediaid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:multimediaid', (req, res, next) => {
    queries.delete(req.params.multimediaid).then(() => {
        res.json({
            deleted: true
        });
    })
});




module.exports = router;