const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/country.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:country', (req, res, next) => {
    queries.getOne(req.params.country).then(data => {
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

router.put('/:country',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.country, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:country',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.country).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;