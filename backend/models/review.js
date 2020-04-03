const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name : {type:String,trim:true},
  emailid :{type:String},
  message:{type:String}
});

module.exports = mongoose.model('REVIEW',reviewSchema);
