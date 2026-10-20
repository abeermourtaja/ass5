const {configSequelize,sequelize}=require('../connection.js')
const {DataTypes}=require('sequelize')
function checkNameLength(user){
    if(user.name.length<=2){
        throw new Error('Name must greater than 2 characters');
    }
}
const User=sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            checkPasswordLength(value){
                if(value.length<=6){
                    throw new Error('password length must be greater than 6 characters ')
                }
            }
        }
    },
    role:{
        type:DataTypes.ENUM('user','admin')
    },
    createdAt:{
        type:DataTypes.DATE,

    },
    updatedAt:{
        type:DataTypes.DATE
    }
},{
    hooks:{
        beforeCreate:(user)=>checkNameLength(user)
            
            
        },
    }
)
module.exports=User;