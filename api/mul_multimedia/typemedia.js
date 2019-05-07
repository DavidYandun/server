const express = require('express');
const router = express.Router();
const queries = require('../../db/mul_multimedia/typemedia.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:typemedia', (req, res, next) => {
    queries.getOne(req.params.typemedia).then(data => {
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

router.put('/:typemedia', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.typemedia, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:typemedia', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.typemedia).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;