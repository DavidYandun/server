const express = require('express');
const router = express.Router();
const User = require('../db/users/users.queries');


/* GET users listing. */
router.get('/', (req, res) => {
  if (!isNaN(req.params.userid)) {
    User.getOne(req.params.userid).then(user => {
      if (user) {
        delete user.password;
        res.json(user);
      } else {
        resError(res, 404, "User Not Found");
      }
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
});


module.exports = router;