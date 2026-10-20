const User=require('./userModel')
const Post=require('./postModel')
const Comment=require('./commentModel')
User.hasMany(Post,{
    foreignKey:"userId"
})
Post.belongsTo(User,{
    foreignKey:"userId"
})
Post.hasMany(Comment,{
    foreignKey:"postId"
})
User.hasMany(Comment,{
    foreignKey:"userId"
})
Comment.belongsTo(Post,{
    foreignKey:"postId"
})
Comment.belongsTo(User,{
    foreignKey:"userId"
})
module.exports={Post,Comment,User}