const { User, Post, Comment } = require('../../../DB/models');

const createPost=async(data)=>{
    return await Post.build(data).save();
}
const deletePost=async(id)=>{
    return await Post.destroy({
        where:{id},
    })
}
const getPostById=async(id)=>{
    return await Post.findByPk(id);
}
const getAllPosts=async()=>{
    return (await Post.findAll({
        attributes:['id','title'],
        include:[
            {
                model:User,
                attributes:['id','name']
            },
            {
                model:Comment,
                attributes:['id','content']
            }
        ]
    }
    ));
}
const getPostsWithCommentsCount=async()=>{
    return await Post.findAll({
        attributes:['id','title',
            [Post.sequelize.fn('COUNT',Post.sequelize.col('Comments.id')),'commentsCount']
        ],
        include: [
            {
                model: Comment,
                attributes: []
            }
        ],
        group: ['Post.id'],
    });
}
module.exports={createPost, deletePost,getPostById, getAllPosts, getPostsWithCommentsCount}