const mongoose = require('mongoose')

const Schema = mongoose.Schema;

testimonialSchema = new Schema ({
    "name" : String,
    "surname" : String,
    "proffession" : String,
    "Message" : String,
    "image":String
});

const testimonials = mongoose.model('Testimonial', testimonialSchema, 'testimonial');

module.exports = testimonials;