const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_location/continent.queries');


router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:continent', (req, res, next) => {
    queries.getOne(req.params.continent).then(data => {
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

router.put('/:continent', (req, res, next) => {
    queries.update(req.params.continent, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:continent', (req, res, next) => {
    queries.delete(req.params.continent).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;