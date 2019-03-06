const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/order.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:order', (req, res, next) => {
    queries.getOne(req.params.order).then(data => {
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

router.put('/:order', (req, res, next) => {
    queries.update(req.params.order, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:order', (req, res, next) => {
    queries.delete(req.params.order).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;