const postRepository=require('./post.repository.js')
const userRepository=require('../user/user.repository.js')
const createPostService=async(data)=>{
    return await postRepository.createPost(data);
}
const deletePostService=async(id,userId)=>{
    const post=await postRepository.getPostById(id);
    console.log("POST USER ID:", post.userId);
    console.log("JWT USER ID:", userId);

    if(post.userId!==userId){
        throw new Error("You are not authorized to delete this post");
    }
    return await postRepository.deletePost(id);
}
const getAllPostsService=async()=>{
    return await postRepository.getAllPosts();
}
const getCommentsCountService=async()=>{
    return await postRepository.getPostsWithCommentsCount();
}
module.exports={createPostService, deletePostService, getAllPostsService, getCommentsCountService}