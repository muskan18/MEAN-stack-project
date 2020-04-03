const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

firstName: {type: String, trim: true},
lastName : {type: String, trim:true},
emailId : {type:String , unique: true,trim:true},
password: {type: String}
})

module.exports = mongoose.model('USER',userSchema);
