const express = require('express');
const router = express.Router();
const HomeController = require('../../app/controller/homeController');

router.get('/', HomeController.home);

module.exports = router;