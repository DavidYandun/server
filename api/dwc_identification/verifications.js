const express = require('express');
const router = express.Router();
const queries = require('../../db/dwc_identification/verification.queries');


function validVerification(verification) {
    const hasName = typeof verification.verificationstatus == 'string' && verification.verificationstatus.trim() != '';
    const hasDescription = typeof verification.description == 'string';
    return hasName && hasDescription;
}

router.get('/', (req, res) => {
    queries.getAll().then(data => {
        res.json(data);
    })
});

router.get('/:verificationstatus', (req, res, next) => {
    queries.getOne(req.params.verificationstatus).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', (req, res, next) => {
    if (validVerification(req.body)) {
        //insert into db
        queries.create(req.body).then(data => {
            res.json(data[0]);  
        })
    } else {    
        next(new Error('Invalid verification post'));
    }
});

router.put('/:verificationstatus', (req, res, next) => {
    if (validVerification(req.body)) {
        //update sticker
        queries.update(req.params.verificationstatus, req.body).then(data => {
            res.json(data[0]);
        })
    } else {
        next(new Error('Invalid Verification Status'));
    }
});

router.delete('/:verificationstatus', (req, res, next) => {
    queries.delete(req.params.verificationstatus).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;