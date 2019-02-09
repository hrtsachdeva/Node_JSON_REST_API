const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser')
const app = express();

const productRoute = require('./api/routes/products');
const userRoute = require('./api/routes/users');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(morgan('dev'))
app.use('/products',productRoute);
app.use('/users',userRoute);


app.use((req,res,next)=>{
    const error =new Error('not found');
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status ||500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;