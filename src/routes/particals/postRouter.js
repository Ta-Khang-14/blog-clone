const express = require('express');
const router = express.Router();
const postController = require('../../app/controller/postController');

router.get('/detail/:id', postController.detail);
router.post('/stored', postController.stored);
router.get('/new', postController.new);


module.exports = router;