const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/municipality.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});
router.get('/filter/:county', (req, res, next) => {
    queries.getFilter(req.params.county).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/:municipality', (req, res, next) => {
    queries.getOne(req.params.municipality).then(data => {
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

router.put('/:municipality',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.municipality, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:municipality',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.municipality).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;