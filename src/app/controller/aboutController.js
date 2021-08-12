
class AboutController {

    // [GET] /about
    about(req, res, next) {
        res.render('about');
    }

}

module.exports = new AboutController;
