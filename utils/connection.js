const {Sequelize}  =  require("sequelize");
//by default  admin and password will be "root" 
const  db =  new Sequelize("stud","root","rootSid@123",{
    host:'localhost',
dialect:'mysql'
 
})
module.exports = db;  //export this module to use in app.js