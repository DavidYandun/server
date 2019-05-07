const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/genus.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});
router.get('/filter/:family', (req, res, next) => {
    queries.getFilter(req.params.family).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/:genus', (req, res, next) => {
    queries.getOne(req.params.genus).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', authMiddleware.adminAccess, (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.put('/:genus', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.genus, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:genus', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.genus).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;