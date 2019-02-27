const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_recordlevel/recordlevel.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:recordlevelid', (req, res, next) => {
    queries.getOne(req.params.recordlevelid).then(data => {
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

router.put('/:recordlevelid', (req, res, next) => {
    queries.update(req.params.recordlevelid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:recordlevelid', (req, res, next) => {
    queries.delete(req.params.recordlevelid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;