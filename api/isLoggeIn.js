const express = require('express');
const router = express.Router();
const session = require('express-session');
const app = express();

router.use(session({
    secret: 'ESTO ES SECRETO',
    resave: true,
    saveUninitialized: true
  }))
if (sesion == 'user') {

}