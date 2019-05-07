const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_occurrence/organismquantitytype.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:organismquantitytype', (req, res, next) => {
    queries.getOne(req.params.organismquantitytype).then(data => {
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

router.put('/:organismquantitytype', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.organismquantitytype, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:organismquantitytype', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.organismquantitytype).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;