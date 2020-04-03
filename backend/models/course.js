const mongoose = require('mongoose');

const coursesSchema = mongoose.Schema({

name: {type: String, trim: true},
title:{type:String},
desc:{type:String},
link:{type:String}
})

module.exports = mongoose.model('COURSES',coursesSchema);
