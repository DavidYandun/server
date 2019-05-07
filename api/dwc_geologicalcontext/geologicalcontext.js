const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_geologicalcontext/geologicalcontext.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:geologicalcontextid', (req, res, next) => {
    queries.getOne(req.params.geologicalcontextid).then(data => {
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

router.post('/',authMiddleware.adminAccess, (req, res, next) => {
    queries.getOneId(req.body.identificationid).then(data => {
        if (!data) {
            queries.create(req.body).then(data => {
        res.json(data[0]);
            })
        } else {
            next(new Error('ESTE GEOLOGICAL CONTEXT YA FUÉ REGISTRADO'));
        }
    });
});

router.put('/:geologicalcontextid',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.geologicalcontextid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:geologicalcontextid',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.geologicalcontextid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;