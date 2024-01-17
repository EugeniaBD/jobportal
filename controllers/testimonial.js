module.exports = (req, res) => {
res.render('testimonial')
}
const testimonialList = require('../models/Testimonial')
module.exports = async (req, res) => {
        const testimonialItems = await testimonialList.find();
        
        res.render('testimonial', {testimoniallist: testimonialItems})
    }
