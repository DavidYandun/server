const express = require('express');
const router = express.Router();
const queries = require('../../db/users/rols.queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.rolid)) return next();
    next(new Error('ID invalida...'));
};

function validRol(rol) {
    const hasName = typeof rol.name == 'string' && rol.name.trim() != '';
    const hasDescription = typeof rol.description == 'string' && rol.description.trim() != '';
    return hasName && hasDescription;
}

router.get('/', (req, res) => {
    const {
        name
    } = req.query;

    queries.getAll({
        name
    }).then(data => {
        res.json(data);
    })
});

router.get('/:rolid', isValidId, (req, res, next) => {
    queries.getOne(req.params.rolid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', (req, res, next) => {
    if (validRol(req.body)) {
        //insert into db
        queries.create(req.body).then(data => {
            res.json(data[0]);
        })
    } else {
        next(new Error('Invalid rol post'));
    }
});

router.put('/:rolid', isValidId, (req, res, next) => {
    if (validRol(req.body)) {
        //update sticker
        queries.update(req.params.rolid, req.body).then(data => {
            res.json(data[0]);
        })
    } else {
        next(new Error('Invalid rol'));
    }
});

router.delete('/:rolid', isValidId, (req, res, next) => {
    queries.delete(req.params.rolid).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;