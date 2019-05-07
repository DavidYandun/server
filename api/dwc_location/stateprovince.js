const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/stateprovince.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});
router.get('/filter/:country', (req, res, next) => {
    queries.getFilter(req.params.country).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/:stateprovince', (req, res, next) => {
    queries.getOne(req.params.stateprovince).then(data => {
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

router.put('/:stateprovince',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.stateprovince, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:stateprovince',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.stateprovince).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;