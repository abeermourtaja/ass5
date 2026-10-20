const jwt=require('jsonwebtoken')
const User = require('../../../DB/models/userModel')
const {createUser,findByEmail,updateUser,getUserById}=require('./user.repository')
const signUp=async (data)=>{
    const existingUser=await findByEmail(data.email)
    if(existingUser)
        throw new Error('user already Exists')
    const user= await createUser(data)
    const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'})

    return {user,token}
}
const updateUserF=async(id,data)=>{
    return await updateUser(id,data)
}
const getUserByEmail=async(email)=>{
    return await findByEmail(email)
}
const getUserByIdS=async(id)=>{
    return await getUserById(id)
}
module.exports={signUp,updateUserF,getUserByEmail,getUserByIdS}