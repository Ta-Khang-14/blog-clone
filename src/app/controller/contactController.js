
class ContactController {

    // [GET] /contact
    contact(req, res, next) {
        res.render('contact');
    }

}

module.exports = new ContactController;
