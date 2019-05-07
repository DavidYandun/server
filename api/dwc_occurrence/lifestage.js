const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_occurrence/lifestage.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:lifestage', (req, res, next) => {
    queries.getOne(req.params.lifestage).then(data => {
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

router.put('/:lifestage', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.lifestage, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:lifestage', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.lifestage).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;