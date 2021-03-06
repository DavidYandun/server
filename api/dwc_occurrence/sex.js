const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_occurrence/sex.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:sex', (req, res, next) => {
    queries.getOne(req.params.sex).then(data => {
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

router.put('/:sex', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.sex, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:sex', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.sex).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;