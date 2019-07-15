function ensureLoggedIn(req, res, next) {
    console.log(req.signedCookies);
    if (req.signedCookies.userid && req.signedCookies.rolid == 1) {
        next();
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}

function adminAccess(req, res, next) {
    if (req.signedCookies.userid && req.signedCookies.rolid == 1) {
        next();
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}

function taxonomoAccess(req, res, next) {
    if (req.signedCookies.userid) {
        if (req.signedCookies.rolid == 1 || req.signedCookies.rolid == 2) {
            next();
        } else {
            res.status(401);
            next(new Error('No Autorizado'));
        }
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}

function curadorAccess(req, res, next) {
    if (req.signedCookies.userid) {
        if (req.signedCookies.rolid == 1 || req.signedCookies.rolid == 2 || req.signedCookies.rolid == 3) {
            next();
        } else {
            res.status(401);
            next(new Error('No Autorizado'));
        }
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}

function usuarioAccess(req, res, next) {
    if (req.signedCookies.userid) {
        if (req.signedCookies.rolid == 1 || req.signedCookies.rolid == 2 || req.signedCookies.rolid == 3 || req.signedCookies.rolid == 4) {
            next();
        } else {
            res.status(401);
            next(new Error('No Autorizado'));
        }
    } else {
        res.status(401);
        next(new Error('No Autorizado'));
    }
}



module.exports = {
    ensureLoggedIn,
    adminAccess,
    taxonomoAccess,
    curadorAccess,
    usuarioAccess

}