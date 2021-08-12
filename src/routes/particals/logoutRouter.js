const express = require('express');
const router = express.Router();
const logoutController = require('../../app/controller/logoutController');

router.get('/me',logoutController.logout)

module.exports = router;
