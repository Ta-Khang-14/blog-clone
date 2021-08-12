
class LogoutController {

    // [GET] /logout/me
    logout(req, res, next) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }
}

module.exports = new LogoutController();
