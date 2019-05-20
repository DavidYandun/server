const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_identification/identification.queries');
const authMiddleware = require('../../auth/middleware');


router.get('/collection',authMiddleware.adminAccess, (req, res, next) => {
    queries.getCollection().then(data => {

        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('No se puede'));
        }
    })
});
router.get('/collectionaprobados', (req, res, next) => {
    queries.getCollectionAprobados().then(data => {

        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('No se puede'));
        }
    })
});
router.get('/collectionpdf', (req, res, next) => {
    queries.getCollectionPDF().then(data => {

        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('No se puede'));
        }
    })
});

router.get('/collection/:kingdom', (req, res, next) => {
    queries.getReinos(req.params.kingdom).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('No se puede'));
        }
    })
});
router.get('/collectionaprobados/:kingdom', (req, res, next) => {
    queries.getReinosAprobados(req.params.kingdom).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('No se puede'));
        }
    })
});
router.get('/verification/:verificationstatus', (req, res, next) => {
    queries.getVerificationStatus(req.params.verificationstatus).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('No se puede'));
        }
    })
});
router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:identificationid', (req, res, next) => {
    queries.getOne(req.params.identificationid).then(data => {
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

router.put('/:identificationid', authMiddleware.adminAccess, (req, res, next) => {
    queries.update(req.params.identificationid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:identificationid', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.identificationid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;