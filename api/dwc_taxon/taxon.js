const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_taxon/taxon.queries');
const authMiddleware=require('../../auth/middleware');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:taxonid', (req, res, next) => {
    queries.getOne(req.params.taxonid).then(data => {
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
            next(new Error('ESTE TAXÓN YA FUÉ REGISTRADO'));
        }
    });

});

router.put('/:taxonid',authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.taxonid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:taxonid',authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.taxonid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;