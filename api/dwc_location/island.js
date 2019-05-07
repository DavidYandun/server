const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/island.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:island', (req, res, next) => {
    queries.getOne(req.params.island).then(data => {
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

router.put('/:island',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.island, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:island',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.island).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;