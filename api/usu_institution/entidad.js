const express = require('express');
const router = express.Router();
const queries = require('../../db/usu_institution/entidad.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:entidadid', (req, res, next) => {
    queries.getOne(req.params.entidadid).then(data => {
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

router.put('/:entidadid', (req, res, next) => {
    queries.update(req.params.entidadid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:entidadid', (req, res, next) => {
    queries.delete(req.params.entidadid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;