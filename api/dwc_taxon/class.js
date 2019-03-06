const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/class.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:class', (req, res, next) => {
    queries.getOne(req.params.class).then(data => {
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

router.put('/:class', (req, res, next) => {
    queries.update(req.params.class, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:class', (req, res, next) => {
    queries.delete(req.params.class).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;