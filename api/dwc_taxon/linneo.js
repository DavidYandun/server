const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/linneo.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:lineoid', (req, res, next) => {
    queries.getOne(req.params.lineoid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/lineo/:lineoid', (req, res, next) => {
    queries.getLinneo1(req.params.lineoid).then(data => {
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

router.put('/:lineoid', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.lineoid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:lineoid', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.lineoid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;