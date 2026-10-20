const commentRepository=require('./comment.repository.js')
const createCommentService=async(data)=>{
    return await commentRepository.createComment(data);
}
const updateCommentService=async(id,data,userId)=>{
    const comment=await commentRepository.getCommentById(id);
    if(comment.userId!=userId){
        console.log("COMMENT USER ID:", comment.userId);
        console.log("JWT USER ID:", userId);
        throw new Error("You are not authorized to update this comment");
    }
    return await commentRepository.updateComment(id,data);
}
const getCommentsByPostIdService=async(data)=>{
    return await commentRepository.getCommentsByPostId(data);
}
const getCommentsBySearchService=async(search)=>{
    return await commentRepository.getCommentsBySearch(search);
}
const getRecentCommentsService=async(postId)=>{
    return await commentRepository.getRecentComments(postId);
}
const getCommentDetailsService=async(id)=>{
    return await commentRepository.getCommentDetailsById(id);
}
module.exports={createCommentService,updateCommentService,getCommentsByPostIdService,getCommentsBySearchService,getRecentCommentsService,getCommentDetailsService}