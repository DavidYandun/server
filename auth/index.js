const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../db/users/users.queries');


router.get('/', (req, res) => {
    res.json({
        message: 'lock'
    });
})

function validateUser(user) {
    const validEmail = typeof user.email == 'string' &&
        user.email.trim() != '';
    const validPassword = typeof user.password == 'string' &&
        user.password.trim() != '' &&
        user.password.trim().length >= 6;
    return validEmail && validEmail;
}

router.post('/signup', (req, res, next) => {
    if (validateUser(req.body)) {
        User.getOneByEmail(req.body.email).then(data => {
            console.log('data', data);
            //si el usuario no se encuentra
            if (!data) {
                //es un email unico
                //hash password
                bcrypt.hash(req.body.password, 10).then((hash) => {
                    //store hash in your passwordDB
                    //insert user into 
                    const user = {
                        rolid: req.body.rolid,
                        personid: req.body.personid,
                        email: req.body.email,
                        password: hash,
                        status: true
                    };
                    User.create(user).then(rolid => {
                        res.json({
                            rolid,
                            message: 'check'
                        });
                    });
                });
                //redirect
            } else {
                //email en uso
                next(new Error('email en uso'));
            }
        });
    } else {
        next(new Error('Invalid user'));
    }
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    if (validateUser(req.body)) {  
        //check to see if in DB
        User.getOneByEmail(req.body.email).then(data => {
            console.log('user', data);
            if (data) {
                //compare password with hashed password
                bcrypt.compare(req.body.password, data.password).then((result) => {
                    //if the passwords matched
                    if (result) {
                        //setting the 'set-cookie' header
                        //const isSecure=req.app.get('env') != 'development';
                        res.cookie('userid', data.userid, {
                            httpOnly: true,
                            secure: true,//seguridad cuando esté en producción
                            //secure: isSecure,
                            signed: true
                        });
                        res.json({
                            //result, //result==true
                            message: 'Logged in...',
                            success: true
                        });
                    } else {
                        next(new Error('Invalid password'));
                        res.json({
                            message: 'Invalid password',
                            success: false
                        });
                    }
                });
            } else {
                next(new Error('Invalid user'));
                res.json({
                    message: 'Invalid user',
                    success: false
                });
            }
        });
    } else {
        next(new Error('Invalid login'));
        res.json({
            message: 'Invalid login',
            success: false
        });
    }
});
module.exports = router;