const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_identification/identification.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:identificationid', (req, res, next) => {
    queries.getOne(req.params.identificationid).then(data => {
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

router.put('/:identificationid', (req, res, next) => {
    queries.update(req.params.identificationid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:identificationid', (req, res, next) => {
    queries.delete(req.params.identificationid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;