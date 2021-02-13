const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./api/routes/products');
var path = require('path');
mongoose.connect('mongodb+srv://gaurav:'+process.env.MONGO_ATLAS_PW+'@cluster0.c4x7d.mongodb.net/memeDB?retryWrites=true&w=majority',{
     useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true
}).then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if (req.method==='OPTIONS') {
        req.header('Access-Control-Allow-Method','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();

});


app.use('/memes',productRoutes);


app.use((req,res,next)=>{
    const error=new Error('404 Page not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 404);
    res.json({
        error:error.message
    });
});
module.exports =app;