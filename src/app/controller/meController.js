
class MeController {

    // [GET] /contact
    show(req, res, next) {
        res.send('Quản lý tài khoản!');
    }

}

module.exports = new MeController;
