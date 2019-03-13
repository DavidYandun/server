const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/phylum.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/filter/:kingdom', (req, res, next) => {
    queries.getFilter(req.params.kingdom).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/:phylum', (req, res, next) => {
    queries.getOne(req.params.phylum).then(data => {
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

router.put('/:phylum', (req, res, next) => {
    queries.update(req.params.phylum, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:phylum', (req, res, next) => {
    queries.delete(req.params.phylum).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;