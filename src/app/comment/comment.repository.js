const { Comment, User, Post } = require('../../../DB/models');
const createComment=async(data)=>{
    return await Comment.build(data).save();
}
const updateComment=async(id,data)=>{
    return await Comment.update({
        content:data.content
    }, {
        where: { id }
    })
}
const getCommentById=async(id)=>{
    return await Comment.findByPk(id);
}
const getCommentsByPostId=async(data)=>{
    return await Comment.findOrCreate({
        where:{
            content:data.content,
            userId:data.userId,
            postId:data.postId,
        }
    })
}
const getCommentsBySearch=async(search)=>{
    return await Comment.findAndCountAll({
        where:{
            content:search
        }
    })
}
const getRecentComments=async(postId)=>{
    return await Comment.findAll({
        where:{
            postId:postId
        },
        limit:3,
        order:[['createdAt','DESC']]
    })
}
const getCommentDetailsById=async(id)=>{
    return await Comment.findByPk(id,{
        attributes:['id','content'],
        include:[
            {
                model:User,
                attributes:['id','name','email']
            },
            {
                model:Post,
                attributes:['id','title','content']
            }
        ]
    })
}
module.exports={createComment,updateComment,getCommentById,getCommentsByPostId,getCommentsBySearch,getRecentComments,getCommentDetailsById};