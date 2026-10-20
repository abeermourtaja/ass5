const postService=require('./post.service.js')
async function createPostContorller(req,res){
    try{
        const post=await postService.createPostService(req.body)
        return res.status(201).json({message:'post created sucessfully',post})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
async function deletePostController(req,res){
    try{
        const post=await postService.deletePostService(req.params.id,req.user.id)
        return res.status(200).json({message:'post deleted successfully',post})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
async function getAllPostsController(req,res){
    try{
        const posts=await postService.getAllPostsService()
        return res.status(200).json({message:'posts retrieved successfully',posts})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
async function getCommentsCountController(req,res){
    try{
        const posts=await postService.getCommentsCountService() 
        return res.status(200).json({message:'posts retrieved successfully',posts})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
module.exports={createPostContorller, deletePostController, getAllPostsController, getCommentsCountController}