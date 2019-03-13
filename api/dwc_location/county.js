const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/county.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});


router.get('/filter/:stateprovince', (req, res, next) => {
    queries.getFilter(req.params.stateprovince).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.get('/:county', (req, res, next) => {
    queries.getOne(req.params.county).then(data => {
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

router.put('/:county', (req, res, next) => {
    queries.update(req.params.county, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:county', (req, res, next) => {
    queries.delete(req.params.county).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;