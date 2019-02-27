const express = require('express');
const router = express.Router();
const queries = require('../db/stickers.queries');
const session=require('express-session');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('ID invalida...'));
};

function validSticker(sticker) {
    const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
    const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
    const hasRating = !isNaN(sticker.rating);
    const hasURL = typeof sticker.url == 'string' && sticker.url.trim() != '';
    return hasTitle && hasDescription && hasRating && hasURL;
}


//SESSIONS
router.use(session({
    secret: 'ESTO ES SECRETO',
    resave: true,
    saveUninitialized: true
  }))
  


router.get('/', (req, res) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
    //res.send('pagina vista' + req.session.cuenta);
    const {title,description}=req.query;
    queries.getAll({title,description}).then(stickers => {
        res.json(stickers);
        console.log('pagina vista' + req.session.cuenta);
    })
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(sticker => {
        if (sticker) {
            res.json(sticker);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

router.post('/', (req, res, next) => {
    if (validSticker(req.body)) {
        //insert into db
        queries.create(req.body).then(stickers => {
            res.json(stickers[0]);
        })
    } else {
        next(new Error('Invalid sticker'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (validSticker(req.body)) {
        //update sticker
        queries.update(req.params.id, req.body).then(stickers => {
            res.json(stickers[0]);
        })
    } else {
        next(new Error('Invalid sticker'));
    }
});

router.delete('/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    })
});

module.exports = router;