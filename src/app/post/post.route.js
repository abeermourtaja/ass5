const postController=require('./post.controller.js');
const auth=require('../../app/middleware.js')
const express=require('express')
const router=express.Router()
router.post('/posts',postController.createPostContorller)
router.delete('/posts/:id',auth,postController.deletePostController)
router.get('/posts',postController.getAllPostsController)
router.get('/posts/comments-count',postController.getCommentsCountController)
module.exports=router;