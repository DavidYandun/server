const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_organism/organism.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:organismid', (req, res, next) => {
    queries.getOne(req.params.organismid).then(data => {
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

router.post('/', (req, res, next) => {
    queries.getOneId(req.body.identificationid).then(data => {
        if (!data) {
            queries.create(req.body).then(data => {
                res.json(data[0]);
            })
        } else {
            next(new Error('ESTE ORGANISM YA FUÉ REGISTRADO'));
        }
    });
});

router.put('/:organismid', (req, res, next) => {
    queries.update(req.params.organismid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:organismid', (req, res, next) => {
    queries.delete(req.params.organismid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;