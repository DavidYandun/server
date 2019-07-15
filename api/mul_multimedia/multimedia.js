const express = require('express');
const router = express.Router();
const queries = require('../../db/mul_multimedia/multimedia.queries');
const path = require('path');
const authMiddleware = require('../../auth/middleware');
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

router.get('/id/:identificationid', (req, res, next) => {
    queries.getOneId(req.params.identificationid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/all/:identificationid', (req, res, next) => {
    queries.getAllId(req.params.identificationid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/fotografia/:identificationid', (req, res, next) => {
    queries.getAllFotografiaId(req.params.identificationid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/video/:identificationid', (req, res, next) => {
    queries.getAllVideoId(req.params.identificationid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/audio/:identificationid', (req, res, next) => {
    queries.getAllAudioId(req.params.identificationid).then(data => {
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
router.get('/principal/:identificationid', (req, res,next) => {
    queries.getOnePrincipal(req.params.identificationid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/img/:img', (req, res) => {
    let ruta = path.join(__dirname, '../../images_collection', req.params.img);
    return res.sendFile(ruta);
});
router.get('/vid/:vid', (req, res) => {
    let ruta = path.join(__dirname, '../../videos_collection', req.params.vid);
    return res.sendFile(ruta);
});
router.get('/aud/:aud', (req, res) => {
    let ruta = path.join(__dirname, '../../audios_collection', req.params.aud);
    return res.sendFile(ruta);
});


router.post('/', authMiddleware.adminAccess, (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.post('/upload', authMiddleware.adminAccess, function (req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No hay archivos subidos.');
    }
    let file = req.files.file;
    let name = req.body.name;
    file.mv('./images_collection/' + name, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({
            status: 'Imagen cargada'
        });
    });
});

router.post('/uploadVideo', authMiddleware.adminAccess, function (req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No hay archivos subidos.');
    }
    let file = req.files.file;
    let name = req.body.name;
    file.mv('./videos_collection/' + name, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({
            status: 'Video cargado'
        });
    });
});
router.post('/uploadAudio', authMiddleware.adminAccess, function (req, res) {

    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No hay archivos subidos.');
    }
    let file = req.files.file;
    let name = req.body.name;
    file.mv('./audios_collection/' + name, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({
            status: 'Video cargado'
        });
    });
});

router.put('/:multimediaid', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.multimediaid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:multimediaid', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.multimediaid).then(() => {
        res.json({
            deleted: true
        });
    })
});




module.exports = router;