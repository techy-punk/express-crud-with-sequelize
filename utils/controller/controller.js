const Sequelize = require('Sequelize');
const details =  require('../models/details');
 // create a data in table
    exports.create = (req, res) => {
        //checck if name is empty send error message 
        if (!req.body.name) {
               res.status(203).send({
                 message: "Name can not be empty!"
               });
               return;
             } 
             //creating a dataset oject to store all queries 
           const dataset = {
               name: req.body.name,
               dob: req.body.dob,
               score: req.body.score
             };
            //implementing create function 
           details.create(dataset).then(result => {
               res.send(result);
             }).catch(err => {
               res.status(500).send({
                 message: err.message || "Some error occurred while creating the Tutorial."
               });
             });

  }
  //find all data from a table
  exports.findAll = (req,res)=>{
             //getting a condition 
             console.log(req.params.id)
             const ID  =  req.params.id
             const condition = ID ?{
               id: ID
             } : null
            
             console.log(condition)
            //implementing create function 
            details.findAll({where:condition}).then(result => {
                console.log(result)
              }).catch(err => {
               res.status(500).send({
                 message: err.message || "not found"
               });
             });
             
  }
  //find a data by ID
  exports.findByID = (req,res)=>{
   //getting a condition 
   const id  =  req.params.id
    if(id ==  null ){
      res.status(203).send({
        message: "Id can not be empty!"
      });
      return;
    }
  //implementing create function 
  details.findByPk(id).then(result => {
      console.log(result)
    }).catch(err => {
     res.status(500).send({
       message: err.message || "not found"
     });
   }); 
  }
  // update an existing data
  exports.updateData= (req,res)=>{
  const id  =  req.params.id
   const name = req.body.name;
   const dob =  req.body.dob;
   const score =  req.body.score;
  if(id == null ){
    res.status(203).send({
      message: "Id can not be empty!"
    });
    return;
  }
  details.update({name:name, dob:dob, score:score },{where:{id:id}} ).then(result=>{
    res.send('data is updated')
  })
 }
  //delete a data from table
  exports.delete = (req,res)=>{
   //getting id to delete a data
   const id  =  req.params.id
    if(id ==  null ){
      res.status(203).send({
        message: "Id can not be empty!"
      });
      return;
    }
  //implementing delete function 
  details.destroy({where:{id:id}}).then(result => {
      res.status(200).send(`item with id = ${id} deleted succesfully`)
    }).catch(err => {
     res.status(500).send({
       message: err.message || `unexpected error `
     });
   });
  }
  //delete all data from table 
  exports.deleteAll = (req,res)=>{
    details.destroy().then(result => {
      res.status(200).send(`all items deleted succesfully`)
    }).catch(err => {
     res.status(500).send({
       message: err.message || `unexpected error `
     });
   });
  }

  /*
  // check if request body is empty
    if (!req.body.name) {
        res.status(203).send({
          message: "Name can not be empty!"
        });
        return;
      } 
    const dataset = {
        name: req.body.name,
        dob: req.body.dob,
        score: req.body.score
      };

    details.create(dataset).then(result => {
        res.send(result);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Tutorial."
        });
      });
      */