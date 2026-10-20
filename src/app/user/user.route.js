const express=require('express')
const router=express.Router()
const userController=require('./user.controller.js');
router.post('/users/signup',userController.signUpF);
router.put('/users/:id',userController.updateUser);
router.get('/users/by-email',userController.getUserByEmail);
router.get('/users/:id',userController.getUserByIdF);
module.exports=router;
