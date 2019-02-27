const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/taxonrank.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:taxonrank', (req, res, next) => {
    queries.getOne(req.params.taxonrank).then(data => {
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

router.put('/:taxonrank', (req, res, next) => {
    queries.update(req.params.taxonrank, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:taxonrank', (req, res, next) => {
    queries.delete(req.params.taxonrank).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;