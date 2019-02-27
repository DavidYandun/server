const express = require('express');
const router = express.Router();
const queries = require('../../db/usu_institution/institution.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:institutionid', (req, res, next) => {
    queries.getOne(req.params.institutionid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.put('/:institutionid', (req, res, next) => {
    queries.update(req.params.institutionid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:institutionid', (req, res, next) => {
    queries.delete(req.params.institutionid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;