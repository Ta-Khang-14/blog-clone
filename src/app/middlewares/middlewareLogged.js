
module.exports = function middlewareLogged(req, res, next) {
    res.locals.loggedIn = null;
    if(req.session.userId) {
        res.locals.loggedIn = req.session.userId;
    }
    next();
};
