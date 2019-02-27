const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/geodeticdatum.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:geodeticdatum', (req, res, next) => {
    queries.getOne(req.params.geodeticdatum).then(data => {
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

router.put('/:geodeticdatum', (req, res, next) => {
    queries.update(req.params.geodeticdatum, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:geodeticdatum', (req, res, next) => {
    queries.delete(req.params.geodeticdatum).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;