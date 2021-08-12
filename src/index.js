const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const {urlencoded, json} = require('express');
const session = require('express-session');
// middleware
const middlewareLogged = require('./app/middlewares/middlewareLogged');

// cau hinh cookie
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
// dung middleware uploadfiles
app.use(fileUpload());
// cau hinh require data form
app.use(urlencoded({ extended: false }))
app.use(json())

// Ket noi mongoose
const connect = require('./config/mongoBD/index');
connect();

// cau hinh static file
app.use(express.static(path.join(__dirname,'public')));

// cau hinh temlate engine
app.set('views', path.join(__dirname,'resources','views'));
app.set('view engine', 'ejs');

// kiem soat viec login thong qua middleware
app.use(middlewareLogged);
// cau hinh router
const router = require('./routes');
router(app);


const port = 3000;
app.listen(port, () =>{
console.log(`Listening http://localhost:${port}`);
})
