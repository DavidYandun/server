const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/location.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:locationid', (req, res, next) => {
    queries.getOne(req.params.locationid).then(data => {
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

router.put('/:locationid', (req, res, next) => {
    queries.update(req.params.locationid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:locationid', (req, res, next) => {
    queries.delete(req.params.locationid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;