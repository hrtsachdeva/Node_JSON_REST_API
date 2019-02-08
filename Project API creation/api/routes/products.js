const express = require('express');
const router = express.Router();

router.get('/',(req ,res,next) =>
{
    res.status(200).json({
        message: 'handling get request '
    });
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