const express = require('express');
const router = express.Router();
const meController = require('../../app/controller/meController');


router.get('/', meController.show);


module.exports = router;