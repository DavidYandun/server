const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/taxonomicstatus.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:taxonomicstatus', (req, res, next) => {
    queries.getOne(req.params.taxonomicstatus).then(data => {
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

router.put('/:taxonomicstatus', (req, res, next) => {
    queries.update(req.params.taxonomicstatus, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:taxonomicstatus', (req, res, next) => {
    queries.delete(req.params.taxonomicstatus).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;