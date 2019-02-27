const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_occurrence/reproductivecondition.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:reproductivecondition', (req, res, next) => {
    queries.getOne(req.params.reproductivecondition).then(data => {
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

router.put('/:reproductivecondition', (req, res, next) => {
    queries.update(req.params.reproductivecondition, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:reproductivecondition', (req, res, next) => {
    queries.delete(req.params.reproductivecondition).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;