// Modelo de usuarios

// requiero librerias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// creo esquema del modelo usuarios
var UserSchema = new Schema({
	name: String,
	email: String,
	about: String,
	phone: Number,
	adress: String,
	photo: String,
	usuario: { type: String, required: true, index: { unique: true } },
	password: String
});

//correr antes de .save()
UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password, done){
 bcrypt.compare(password, this.password, function(err, isMatch){
   // done(err, isMatch);
  if (err) return done(err);
  done(null, isMatch);
 });
};


module.exports = mongoose.model('modelUser', UserSchema);