const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_recordlevel/recordlevel.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:recordlevelid', (req, res, next) => {
    queries.getOne(req.params.recordlevelid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});
router.get('/id/:identificationid', (req, res, next) => {
    queries.getOneId(req.params.identificationid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', authMiddleware.adminAccess, (req, res, next) => {
    queries.getOneId(req.body.identificationid).then(data => {
        if (!data) {
            queries.create(req.body).then(data => {
                res.json(data[0]);
            })
        } else {
            next(new Error('ESTE RECORD LEVEL YA FUÉ REGISTRADO'));
        }
    });
});

router.put('/:recordlevelid', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.recordlevelid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:recordlevelid', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.recordlevelid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;