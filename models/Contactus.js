const mongoose = require('mongoose')

const Schema = mongoose.Schema;

ContactSchema = new Schema ({
    "name" : String,
    "surname" : String,
    "email" : String,
    "subject" : String,
    "message" : String,
});

const Contactus = mongoose.model('contactus', ContactSchema, 'contactus');

module.exports = Contactus;