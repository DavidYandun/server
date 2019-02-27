const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_geologicalcontext/geologicalcontext.queries');


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

router.post('/', (req, res, next) => {
    queries.create(req.body).then(data => {
        res.json(data[0]);
    })
});

router.put('/:geologicalcontextid', (req, res, next) => {
    queries.update(req.params.geologicalcontextid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:geologicalcontextid', (req, res, next) => {
    queries.delete(req.params.geologicalcontextid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;