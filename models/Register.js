const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    "name": {type:String, required: true},
    "email": {type: String, unique: true, required: true},
    "user": {type: String, unique: true, required: true},
    "password": {type:String},
});

// Hash the password before saving
RegisterSchema.pre('save', function (next) {
            const user = this;
        bcrypt.hash(user.password, 10, function(error, hash){
             console.log(hash)
            //  console.log(error)
            // console.log(user.password)
            user.password = hash;
            // console.log(user.password)
            next();
        });
   
});
// RegisterSchema.plugin(uniqueValidator);
const Register = mongoose.model('register', RegisterSchema, 'register');

module.exports = Register;
