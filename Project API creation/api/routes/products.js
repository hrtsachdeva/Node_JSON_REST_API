const express = require('express');
var mysql      = require('mysql');
const router = express.Router();


// dbcode starts
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'project'
  });
//   connection.connect();

//   connection.query('SELECT * from users', function(err, rows, fields) {
//     if (!err)
//       console.log('The solution is: ', rows);
//     else
//       console.log('Error while performing Query.');
//   });
  
//   connection.end();  
  //db code ends

router.get('/',(req ,res,next) =>
{

    //db code starts
    connection.connect();
    connection.query('SELECT * from users', function(err, rows, fields) {
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

router.post('/',(req ,res,next) =>
{   
    const prod = {
        names: req.body.hello
    };
    
    res.status(200).json({
        message: 'handling post request ',
        data : prod
        
        
    });
} );

router.get('/:productid',(req,res,next) => {
    const id = req.params.productid;
    if(id == 'special')
    {
        res.status(200).json({
            message:'search success'
        });
    
    }else{
        res.status(200).json({
            message:'search failed'
        });
    }
    
});


router.patch('/:productid',(req,res,next) => {
    const id = req.params.productid;
    if(id == 'special')
    {
        res.status(200).json({
            message:'patch success'
        });
    
    }else{
        res.status(200).json({
            message:'patch failed'
        });
    }
    
});


router.delete('/:productid',(req,res,next) => {
    const id = req.params.productid;
    if(id == 'special')
    {
        res.status(200).json({
            message:'delete success'
        });
    
    }else{
        res.status(200).json({
            message:'delete failed'
        });
    }
    
});

module.exports = router;