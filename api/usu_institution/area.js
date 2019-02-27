const express = require('express');
const router = express.Router();
const queries = require('../../db/usu_institution/area.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:areaid', (req, res, next) => {
    queries.getOne(req.params.areaid).then(data => {
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

router.put('/:areaid', (req, res, next) => {
    queries.update(req.params.areaid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:areaid', (req, res, next) => {
    queries.delete(req.params.areaid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;