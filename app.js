const express = require('express');
const cors = require('cors');
const {Sequelize} = require('sequelize');
const app = express();
//exporting controllers to use crud function
const hook  =  require('./utils/controller/controller')
//Database Connection
const db = require('./utils/connection');
//checking if dtabase is successfuly connected or not
db.authenticate().then(() => {
    console.log('Database connected succesfully...');
}).catch(err => {
    console.log('Error encountered: ' + err);
})
// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
// create an item in table
 app.post('/create',(req,res)=>{
    hook.create(req,res)    
  })
//find items by some condition
  app.get('/findall/:id',(req,res)=>{
    hook.findAll(req,res)
  })
  // find an item with its id
  app.get('/findbyid/:id',(req,res)=>{
    hook.findByID(req,res)
  })
  //updating certain item with some conditions
  app.post('/update',(req,res)=>{
    hook.updateData(req,res)
  })
  //delete an item with id or some condition
  app.get('/delete/:id', (req,res)=>{
       hook.delete(req,res);
  })
 //delete every item from table
  app.post('/deleteall', (req,res)=>{
   hook.deleteAll(req,res);
  })

const PORT = process.env.PORT || 8000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
}).catch(err => console.log("Error: " + err));