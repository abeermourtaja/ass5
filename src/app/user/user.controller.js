const userService=require('./user.service')
async function signUpF(req,res){
    try{
        const user=await userService.signUp(req.body)
        return res.status(201).json({message:'user created sucessfully',user})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
async function updateUser(req,res){
    try{
        const user=await userService.updateUserF(req.params.id, req.body)
        return res.status(200).json({message:'user updated sucessfully',user})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
async function getUserByEmail(req,res){
    try{
        const user=await userService.getUserByEmail(req.query.email)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        return res.status(200).json({user})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
async function getUserByIdF(req,res){
    try{
        const user=await userService.getUserByIdS(req.params.id)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        return res.status(200).json({user})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:err.message})
    }
}
module.exports={signUpF,updateUser,getUserByEmail,getUserByIdF}
