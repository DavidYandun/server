const express = require('express');
const router = express.Router();
const queries = require('../db/persons.queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.personid)) return next();
    next(new Error('ID invalida...'));
};

function validPerson(person) {
    const hasName = typeof person.name == 'string' && person.name.trim() != '';
    const hasLastName = typeof person.lastname == 'string' && person.lastname.trim() != '';
    const hasCellphone = typeof person.cellphone == 'string' && person.cellphone.trim() != '';
    const hasPhone = typeof person.phone == 'string' && person.phone.trim() != '';
    return hasName && hasLastName && hasCellphone && hasPhone;
}

router.get('/', (req, res) => {
    const {
        name,lastname
    } = req.query;

    queries.getAll({
        name, lastname
    }).then(data => {
        res.json(data);
    })
});

router.get('/:personid', isValidId, (req, res, next) => {
    queries.getOne(req.params.personid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', (req, res, next) => {
    if (validPerson(req.body)) {
        //insert into db
        queries.create(req.body).then(data => {
            res.json(data[0]);
        })
    } else {
        next(new Error('Invalid person'));
    }
});

router.put('/:personid', isValidId, (req, res, next) => {
    if (validPerson(req.body)) {
        //update sticker
        queries.update(req.params.personid, req.body).then(data => {
            res.json(data[0]);
        })
    } else {
        next(new Error('Invalid person'));
    }
});

router.delete('/:personid', isValidId, (req, res, next) => {
    queries.delete(req.params.personid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;