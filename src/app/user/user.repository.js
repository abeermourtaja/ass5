const User=require('../../../DB/models/userModel.js');
const findByEmail=async (email)=>{
    return await User.findOne({
        where:{email},
    });
}
const createUser= async(data)=>{
    const user=User.build(data);
    return await user.save();
}
const updateUser=async(id,data)=>{
    const user=await User.upsert({id,...data},{validate:false});
    return user;
}
const getUserById=async(id)=>{
    return await User.findByPk(id,{
        attributes:{
            exclude:['role']
        }
    });
}

module.exports={createUser,findByEmail,updateUser,getUserById}
