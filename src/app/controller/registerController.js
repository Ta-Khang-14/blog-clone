let user = require('../models/user');
const bcrypt = require('bcrypt');

class RegisterController {

    // [GET] /register/sign-in
    signIn(req, res, next) {
        res.render('register',{
            data: null
        });
    }
    // [GET] /register/sign-up
    signUp(req, res, next) {
        res.render('register/sign-up',{
            data: null
        });
    }
    //[POST] /register/sign-up/created
    createdUser(req, res, next) {
        user.findOne({username: req.body.username})
            .then(userCur => {
                if(!userCur) {
                    let newUser = new user(req.body);
                    newUser.save()
                        .then(() => res.redirect('/register/sign-in'))
                        .catch(next)
                }
                else {
                    res.render('register/sign-up', {
                        data: {
                            ...req.body,
                            message: "Tên đăng nhập đã tồn tại!"
                        }
                    });
                }
            })
            .catch(next)
    }
    //[POST] /register/sign-up/checked
    checkedLogin(req, res, next) {
        let {username, password} = req.body;
        user.findOne({username: username})
            .then(userCur => {
                bcrypt.compare(password, userCur.password)
                .then(result => {
                    if(result) {
                        req.session.userId = userCur._id;
                        res.redirect('/');
                    }
                    else {
                        throw new Error('error test');
                    }
                })
                .catch(() =>{
                    res.render('register', {
                        data: {
                            ...req.body,
                            message: "Mật khẩu không đúng!"
                        }
                    });
                })
            })
            .catch(() =>{
                res.render('register', {
                    data: {
                        ...req.body,
                        message: "Tên đăng nhập không đúng!"
                    }
                    
                });
            })
    }
}

module.exports = new RegisterController;
