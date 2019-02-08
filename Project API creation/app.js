const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();

const productRoute = require('./api/routes/products');

app.use(morgan('dev'))
app.use('/products',productRoute);

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

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