const mongoose = require('mongoose');

const youtubeSchema = mongoose.Schema({
  name : {type:String,trim:true},
  links :{type:String}
});

module.exports = mongoose.model('YOUTUBE',youtubeSchema);
