const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/specie.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});
router.get('/filter/:genus', (req, res, next) => {
    queries.getFilter(req.params.genus).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/:specie', (req, res, next) => {
    queries.getOne(req.params.specie).then(data => {
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

router.put('/:specie', (req, res, next) => {
    queries.update(req.params.specie, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:specie', (req, res, next) => {
    queries.delete(req.params.specie).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;