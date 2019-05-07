const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_geologicalcontext/eon.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:name', (req, res, next) => {
    queries.getOne(req.params.name).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/',authMiddleware.adminAccess, (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.put('/:name',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.name, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:name',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.name).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;