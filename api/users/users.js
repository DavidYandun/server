const express = require('express');
const router = express.Router();
const queries = require('../../db/users/users.queries');
const bcrypt = require('bcryptjs');
const path = require('path');

function isValidId(req, res, next) {
    if (!isNaN(req.params.userid)) return next();
    next(new Error('ID invalida...'));
};


function validateUser(user) {
    const validEmail = typeof user.email == 'string' &&
        user.email.trim() != '';
    const validPassword = typeof user.password == 'string' &&
        user.password.trim() != '' &&
        user.password.trim().length >= 6;
    return validEmail && validPassword;
}

router.get('/rol', (req, res) => {
    const {
        email
    } = req.query;

    queries.getAllWithRol({
        email
    }).then(data => {
        res.json(data);
    })
});

router.get('/', (req, res) => {
    const {
        email
    } = req.query;

    queries.getAll({
        email
    }).then(data => {
        res.json(data);
    })
});
router.get('/:userid', isValidId, (req, res, next) => {
    queries.getOne(req.params.userid).then(data => {
        if (data) {
            res.json(data);
        } else {
            res.status(404);
            next(new Error('Not Found :('));
        }
    })
});

//post normal
/*router.post('/', (req, res, next) => {
    if (validateUser(req.body)) {
        //insert into db
        queries.create(req.body).then(data => {
            res.json(data[0]);
        })
    } else {
        next(new Error('Invalid user'));
    }
});*/


router.post('/', (req, res, next) => {
    if (validateUser(req.body)) {
        //verificar si el userid ya está registrado
        queries.getOne(req.body.userid).then(data => {
            console.log('data', data);
            //si el userid no se encuentra
            if (!data) {
                //verificar si el email ya está registrado
                queries.getOneByEmail(req.body.email).then(data => {
                    console.log('data', data);
                    //si el correo no se encuentra
                    if (!data) {
                        //es un email unico
                        //hash password
                        bcrypt.hash(req.body.password, 10).then((hash) => {
                            //store hash in your passwordDB
                            //insert user into 
                            const user = {
                                userid: req.body.userid,
                                rolid: req.body.rolid,
                                name: req.body.name,
                                lastname: req.body.lastname,
                                email: req.body.email,
                                direction: req.body.direction,
                                phone: req.body.phone,
                                password: hash,
                                url:req.body.url
                            };
                            queries.create(user).then(data => {
                                res.json({
                                    data,
                                    message: 'check'
                                });
                            });
                        });
                        //redirect
                    } else {
                        //email en uso
                        next(new Error('ESTE EMAIL YA EXISTE'));
                    }
                });
            } else {
                //userid en uso
                next(new Error('ESTE USUARIO YA EXISTE'));
            }
        });
    } else {
        next(new Error('USUARIO INCORRECTO'));
    }
});

router.put('/:userid', isValidId, (req, res, next) => {
    queries.update(req.params.userid, req.body).then(data => {
        res.json(data[0]);
    })
});

router.delete('/:userid', isValidId, (req, res, next) => {
    queries.delete(req.params.userid).then(() => {
        res.json({
            deleted: true
        });
    })
});

router.get('/img/:img', (req, res) => {
    let ruta = path.join(__dirname, '../../images_perfil', req.params.img);
    return res.sendFile(ruta);
})

router.post('/upload', function (req, res) {

    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No hay archivos subidos.');
    }
    let file = req.files.file;
    let name = req.body.name;
    file.mv('./images_perfil/' + name, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({
            status: 'Imagen cargada'
        });
    });
});

module.exports = router;