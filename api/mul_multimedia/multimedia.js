const express = require('express');
const router = express.Router();
const queries = require('../../db/mul_multimedia/multimedia.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
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

router.post('/', (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
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