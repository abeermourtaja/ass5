const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('ass_5','root','',{
    host:'localhost',
    dialect:'mysql'
})
async function configSequelize(){
    try{
        await sequelize.authenticate();
        console.log('Database connected successfully');
 
        await sequelize.sync({alter:true})
        console.log('Database synchronized sucessfully')
    }catch(err){
        console.log(err)
    }
}
module.exports = { sequelize, configSequelize };