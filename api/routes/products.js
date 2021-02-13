const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../models/product');
var path = require('path');
router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname + '/frontend2.html'));


    Product.find().exec()
    .then(docs=>{
        console.log(docs);
        res.status(200).json(docs)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});
router.post('/',(req,res,next)=>{    
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        author: req.body.author,
        caption:req.body.caption,
        link:req.body.link
    });
    product
    .save()
    .then(result=>{
        console.log(result);
        res.status(200).json(result); // yha pe .json tha hee nahi bc
        //res.redirect('http://127.0.0.1:5500/frontend/index.html')
        //res.status(201).json({
          //  message:'Handling post requests to /memes',
            //createdProduct: result
        //});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
    
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc);
        if (doc) {
            res.status(200).json(doc);

        } else {
            res.status(404).json({message:'No valid entry found'})
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
    
});
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:"Updated meme"
    })
});
router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    Product.remove({_id:id})
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        });
    });
});

module.exports= router;