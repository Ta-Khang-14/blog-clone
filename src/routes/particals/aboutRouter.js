const express = require('express');
const router = express.Router();
const aboutController = require('../../app/controller/aboutController');

router.get('/', aboutController.about);

module.exports = router;