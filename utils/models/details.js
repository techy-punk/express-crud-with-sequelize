const Sequelize = require('Sequelize');
const db = require('../connection');
const details =  db.define("details",{
 id:{
 type:Sequelize.INTEGER,
 autoIncrement:true,
 allowNull:false, // coloumn can't be empty
 primaryKey:true // id coloumn will act as primary key
 },
 name:{
  type:Sequelize.STRING,
  allowNull:false

 },
 dob:{
  type:Sequelize.STRING,
  allowNull:false
 },
 score:{
  type:Sequelize.INTEGER,
  allowNull:false
 }
})
module.exports =  details;