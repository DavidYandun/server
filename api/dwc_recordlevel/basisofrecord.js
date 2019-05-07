const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_recordlevel/basisofrecord.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:basisofrecord', (req, res, next) => {
    queries.getOne(req.params.basisofrecord).then(data => {
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

router.put('/:basisofrecord', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.basisofrecord, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:basisofrecord', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.basisofrecord).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;