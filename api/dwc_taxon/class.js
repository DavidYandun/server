const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/class.queries');
const authMiddleware=require('../../auth/middleware');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/filter/:phylum', (req, res, next) => {
    queries.getFilter(req.params.phylum).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
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

router.post('/',authMiddleware.adminAccess, (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.put('/:class',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.class, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:class',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.class).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;