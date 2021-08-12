const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const blogPost = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    content: {type: String, require: true},
    author: {type: String, require: true},
    img: {type: String},
}, {
    timestamps: true
})

module.exports = mongoose.model('blogpost', blogPost);