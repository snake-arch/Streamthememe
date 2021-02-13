const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: String,
    caption:String,
    link:String
});

module.exports = mongoose.model('Product',productSchema);