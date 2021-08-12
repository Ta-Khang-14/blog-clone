const express = require('express');
const router = express.Router();
const registerController = require('../../app/controller/registerController');

router.post('/sign-up/checked', registerController.checkedLogin);
router.post('/sign-up/created', registerController.createdUser);
router.get('/sign-up', registerController.signUp);
router.get('/sign-in', registerController.signIn);


module.exports = router;