const {Sequelize}  =  require("sequelize");
//by default  admin and password will be "root" 
const  db =  new Sequelize("stud","root","root",{
    host:'localhost',
    dialect:'mysql' // use dailect of your choice 
 
})
module.exports = db;  //export this module to use in app.js
