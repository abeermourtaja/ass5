const commentService=require('./comment.service.js')
const createCommentController=async(req,res)=>{
    try{
        const comment=await commentService.createCommentService(req.body)
        return res.status(201).json({message:'comment created sucessfully',comment})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
const updateCommentController=async(req,res)=>{
    try{
        const comment=await commentService.updateCommentService(req.params.id,req.body,req.body.userId)
        return res.status(200).json({message:'comment updated successfully',comment})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
const getCommentsByPostIdController=async(req,res)=>{
    try{
        const comments=await commentService.getCommentsByPostIdService(req.body) 
        return res.status(200).json({message:'comments retrieved successfully',comments})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
const getCommentsBySearchController=async(req,res)=>{
    try{
        const comments=await commentService.getCommentsBySearchService(req.query.word)
        return res.status(200).json({message:'comments retrieved successfully',comments})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
const getRecentCommentsController=async(req,res)=>{
    try{
        const comments=await commentService.getRecentCommentsService(req.params.postId)
        return res.status(200).json({message:'comments retrieved successfully',comments})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
const getCommentDetailsController=async(req,res)=>{
    try{
        const comment=await commentService.getCommentDetailsService(req.params.id)
        return res.status(200).json({message:'comment retrieved successfully',comment})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
module.exports={createCommentController,updateCommentController,getCommentsByPostIdController,getCommentsBySearchController,getRecentCommentsController,getCommentDetailsController}