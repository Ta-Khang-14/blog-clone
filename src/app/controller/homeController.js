const blogPost = require('../models/blogpost');

class HomeController {

    // [GET] /
    home(req, res, next) {
        let page = 0;
        let blogsOfPage = 3;
        if(req.query.next) {
            page = req.query.next;
        }
        let [countBlog, posts] = [
            blogPost.countDocuments({}),
            blogPost.find({}).sort({
                createdAt: "desc"
            })
            .skip(blogsOfPage * page)
            .limit(blogsOfPage)
        ]
        
        Promise.all([countBlog, posts])
            .then(([countBlogs, posts]) => {
                
                if(page < countBlogs/blogsOfPage - 1) {
                    res.render('index', {
                        posts: posts,
                        nextPage: +page + 1,
                        prevPage: +page == 0 ? +page : +page - 1,
                        error: null,
                    })
                }
                else {
                    res.render('index', {
                        posts: posts,
                        nextPage: +page,
                        prevPage: +page == 0 ? +page : +page - 1,
                        error: true,
                    })
                }

            })
            .catch(next);
    }

    // [GET] /back
    back(req, res, next) {
        res.redirect('back');
    }
}

module.exports = new HomeController;
