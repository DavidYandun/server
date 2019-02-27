const express = require('express');
const router = express.Router();
const queries = require('../../db/cons_conserva/proceso.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:procesoid', (req, res, next) => {
    queries.getOne(req.params.procesoid).then(data => {
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

router.put('/:procesoid', (req, res, next) => {
    queries.update(req.params.procesoid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:procesoid', (req, res, next) => {
    queries.delete(req.params.procesoid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;