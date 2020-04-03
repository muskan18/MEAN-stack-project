const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({

name: {type: String, trim: true},
title:{type:String},
description:{type:String},
links:{type:String}
})

module.exports = mongoose.model('BLOG',blogSchema);
