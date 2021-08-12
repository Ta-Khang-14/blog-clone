
module.exports = function pagination(req, res, next) {
    res.locals.timeCur = null;
    next();
}

