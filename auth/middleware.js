function ensureLoggedIn(req, res, next) {
    console.log(req.signedCookies);
    if (req.signedCookies.userid&&req.signedCookies.rolid == 1) {
        next();
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}

function adminAccess(req, res, next) {
      if (req.signedCookies.userid&&req.signedCookies.rolid == 1) {
        next();
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}



module.exports = {
    ensureLoggedIn,
    adminAccess,
    
}