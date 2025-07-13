const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// إنشاء بوست جديد
router.post('/posts', postController.createPost);

// جلب كل البوستات
router.get('/posts', postController.getAllPosts);

// جلب بوست بالـ id
router.get('/posts/:id', postController.getPostById);

// تعديل بوست
router.patch('/posts/:id', postController.updatePost);

// حذف بوست
router.delete('/posts/:id', postController.deletePost);
//task3
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
