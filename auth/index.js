const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../db/users/users.queries');


router.get('/', (req, res) => {
    res.json({
        message: '🔐'
    });
})
router.get('/signup', (req, res) => {
    res.json({
        message: '✅'
    });
})

function validateUser(user) {
    const validEmail = typeof user.email == 'string' &&
        user.email.trim() != '';
    const validPassword = typeof user.password == 'string' &&
        user.password.trim() != '' &&
        user.password.trim().length >= 6;
    return validEmail && validPassword;
}

router.post('/login', (req, res, next) => {

    if (validateUser(req.body)) {
        //ver si existe en la DB
        User.getOneByEmail(req.body.email).then(data => {
            console.log('user', data);
            if (data) {
                //comparar password with hashed password
                bcrypt.compare(req.body.password, data.password).then((result) => {
                    //si la pasword coincide
                    if (result) {
                        //setting the 'set-cookie' header
                        const isSecure = req.app.get('env') != 'development';
                        res.cookie('userid', data.userid, {
                            httpOnly: true,
                            secure: isSecure,
                            //secure:true,
                            signed: true
                        });
                        res.cookie('rolid', data.rolid, {
                            httpOnly: true,
                            secure: isSecure,
                            //secure:true,
                            signed: true

                        });
                        res.json({
                            //result, //result==true
                            message: 'Iniciaste sesión... ✅',
                            success: true
                        });
                    } else {
                        next(new Error('Contraseña incorrecta 🔑'));
                        res.json({
                            message: 'Contraseña incorrecta 🔑',
                            success: false
                        });
                    }
                });
            } else {
                next(new Error('El usuario no existe 😢'));
                res.json({
                    message: 'El usuario no existe 😢',
                    success: false
                });
            }
        });
    } else {
        next(new Error('Inicio de sesión incorrecto ❌'));
        res.json({
            message: 'Inicio de sesión incorrecto ❌',
            success: false
        });
    }
});
router.get('/logout', (req, res) => {
    res.clearCookie('userid')
    res.clearCookie('rolid')
    res.json({
        message: 'Sesión cerrada'
    })
})

router.get('/loggedin', (req, res) => {
    if (req.signedCookies.userid) {
        res.json({
            loggedin: true
        });
    } else {
        res.json({
            loggedin: false
        });
    }
})
module.exports = router;