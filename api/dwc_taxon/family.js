const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/family.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});
router.get('/filter/:order', (req, res, next) => {
    queries.getFilter(req.params.order).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/:family', (req, res, next) => {
    queries.getOne(req.params.family).then(data => {
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

router.put('/:family', (req, res, next) => {
    queries.update(req.params.family, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:family', (req, res, next) => {
    queries.delete(req.params.family).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;