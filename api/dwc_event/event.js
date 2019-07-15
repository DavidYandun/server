const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_event/event.queries');
const authMiddleware = require('../../auth/middleware');

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:eventid', (req, res, next) => {
    queries.getOne(req.params.eventid).then(data => {
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

router.post('/', authMiddleware.usuarioAccess, (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.put('/:eventid', authMiddleware.usuarioAccess, (req, res, next) => {
    queries.update(req.params.eventid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:eventid', authMiddleware.adminAccess, (req, res, next) => {
    queries.delete(req.params.eventid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;