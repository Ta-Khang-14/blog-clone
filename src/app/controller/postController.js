const path = require('path');
const blogPost = require('../models/blogpost');

class PostController {

    // [GET] /post/detail/:id
    detail(req, res, next) {
        blogPost.findById(req.params.id)
            .then(post => res.render('post',{
                post
            }))
            .catch(next)
    }
    // [GET] /post/new
    new(req, res, next) {
        res.render('post/new_post',{
            err: null
        });
    }
    // [POST] /post/stored
    stored(req, res, next) {
        // cau hinh upload file
        if(req.session.userId) {
            let fileUpload = req.files.img;
            fileUpload.mv(path.join('src/public/bg', fileUpload.name))
                .then(() => {
                    let myBlog = new blogPost({
                        ...req.body,
                        img: `/bg/${fileUpload.name}`,
                    });
                    
                    return myBlog.save();
                })
                .then(() => res.redirect('/'))
                .catch(next);
        } else {
            res.render('post/new_post',{
                err: {
                    message: 'Bạn cần đăng nhập để đăng bài.'
                }
            });
        }
        
    }
}

module.exports = new PostController;
