// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  // username: { type: String, required: true, unique: true },
  hash: String,
  firstName: String,
  lastName: String,
  business: String,
  phoneNumber: String,
  residential: Boolean,
  commercial: Boolean,
  role_id: Number,
  approveStatus: Number,
  status: Number,  
  createdAt: Date,
  updatedAt: Date,
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our User in our Node applications
module.exports = User;