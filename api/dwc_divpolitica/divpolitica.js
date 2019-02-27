const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_divpolitica/divpolitica.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:divpoliticaid', (req, res, next) => {
    queries.getOne(req.params.divpoliticaid).then(data => {
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

router.put('/:divpoliticaid', (req, res, next) => {
    queries.update(req.params.divpoliticaid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:divpoliticaid', (req, res, next) => {
    queries.delete(req.params.divpoliticaid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;