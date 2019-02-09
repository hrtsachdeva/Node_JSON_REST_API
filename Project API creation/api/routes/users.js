const express = require('express');
var mysql      = require('mysql');
const router = express.Router();



var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'project'
  });

//get all users with roles
router.get('/allusers',(req ,res,next) =>
{

    //db code starts
    connection.connect();
    connection.query('SELECT * from users_role', function(err, rows, fields) {
        if (!err)
        {
             res.status(200).json({
                message: rows
             });
        }
        else{
            res.status(200).json({
                message: "Error"
             });
        }
          
      });
      
      connection.end();  
    //db code ends
    // res.status(200).json({
    //     message: 'handling get request '
    // });
} );
//add a user for a particular role
router.post('/adduser',(req ,res,next) =>
{   
    
    connection.connect();
    var sql ="insert into users_role values(\'"+req.body.name+"\',\'"+req.body.role+"\')";
    connection.query(sql, function(err, rows, fields) {
        if (!err)
        {
             res.status(200).json({
                message: "User Inserted"
             });
        }
        else{
            res.status(200).json({
                message: "error"
             });
        }
          
      });
      
      connection.end();  
} );

//delete a user for a particular role
router.delete('/deleteuser',(req ,res,next) =>
{   
    
    connection.connect();
    var sql ="delete from users_role where user_name=\'"+req.body.name+"\'and role=\'"+req.body.role+"\'";
    connection.query(sql, function(err, rows, fields) {
        if (!err)
        {   res.status(200).json({
                    message: "User Deleted"
                 });
         }
        else{
            res.status(200).json({
                message: "Error"
             });
        }
          
      });
      
      connection.end();  
} );
//read file
router.get('/read',(req,res,next)=>{

    connection.connect();
    var sql ="SELECT MAX(action_type.acttion_type_id) as max_val,COUNT(action_type.acttion_type_id) as num from action_type inner join roel_action_type on action_type.acttion_type_id = roel_action_type.action_type_id inner JOIN users_role on users_role.role =roel_action_type.role_name inner JOIN resource_role on users_role.role = resource_role.role_name where resource_role.resource_name =\'"+req.body.resource+"\'and users_role.user_name = \'"+req.body.name+"\'";
    connection.query(sql, function(err, rows, fields) {
        if (!err)
        {   
            if(rows[0].num>0)
            {
                if(rows[0].max_val>0)
                {
                    res.status(200).json({
                        message: "You can read this file",
                        
                    });
                }else{
                    res.status(200).json({
                        message: "You cant read this",
                        max_value:rows[0].num
                    });
                }
        }
        }
        else{
            res.status(200).json({
                message: "error"
             });
        }
          
      });
      
      connection.end();  
});
//write file
router.post('/write',(req,res,next)=>{

    connection.connect();
    var sql ="SELECT MAX(action_type.acttion_type_id) as max_val,COUNT(action_type.acttion_type_id) as num from action_type inner join roel_action_type on action_type.acttion_type_id = roel_action_type.action_type_id inner JOIN users_role on users_role.role =roel_action_type.role_name inner JOIN resource_role on users_role.role = resource_role.role_name where resource_role.resource_name =\'"+req.body.resource+"\'and users_role.user_name = \'"+req.body.name+"\'";
    connection.query(sql, function(err, rows, fields) {
        if (!err)
        {   
            if(rows[0].num>0)
            {
                if(rows[0].max_val>1)
                {
                    res.status(200).json({
                        message: "You can write this file",
                        
                    });
                }else{
                    res.status(200).json({
                        message: "You cant write this",
                       
                    });
                }
        }
        }
        else{
            res.status(200).json({
                message: "error"
             });
        }
          
      });
      
      connection.end();  
});
//delete file
router.delete('/delete',(req,res,next)=>{

    connection.connect();
    var sql ="SELECT MAX(action_type.acttion_type_id) as max_val,COUNT(action_type.acttion_type_id) as num from action_type inner join roel_action_type on action_type.acttion_type_id = roel_action_type.action_type_id inner JOIN users_role on users_role.role =roel_action_type.role_name inner JOIN resource_role on users_role.role = resource_role.role_name where resource_role.resource_name =\'"+req.body.resource+"\'and users_role.user_name = \'"+req.body.name+"\'";
    connection.query(sql, function(err, rows, fields) {
        if (!err)
        {   
            if(rows[0].num>0)
            {
                if(rows[0].max_val>2)
                {
                    res.status(200).json({
                        message: "You can delete this file",
                        
                    });
                }else{
                    res.status(200).json({
                        message: "You cant delete this",
                        
                    });
                }
        }
        }
        else{
            res.status(200).json({
                message: "error"
             });
        }
          
      });
      
      connection.end();  
});

module.exports = router;