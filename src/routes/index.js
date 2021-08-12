const homeRouter = require('./particals/homeRouter');
const aboutRouter = require('./particals/aboutRouter');
const contactRouter = require('./particals/contactRouter');
const postRouter = require('./particals/postRouter');
const registerRouter = require('./particals/registerRouter');
const logoutRouter = require('./particals/logoutRouter');
const meRouter = require('./particals/meRouter');


module.exports = function router(app) {
    app.use('/about', aboutRouter);
    app.use('/post', postRouter);
    app.use('/contact', contactRouter);
    app.use('/me', meRouter);
    app.use('/register', registerRouter);
    app.use('/logout', logoutRouter); 
    app.use('/', homeRouter);
    app.use((req, res) => res.render('notFound'));
};
