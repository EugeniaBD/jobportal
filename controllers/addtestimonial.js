const Testimonial = require('../models/Testimonial');
const path = require('path');

module.exports = async (req, res) => {
    console.log(req.body);

    try {
        let image = req.files && req.files.image;
        if (!image) {
            return res.status(400).send('No image uploaded');
        }

        console.log(image.name);
        await image.mv(path.resolve(__dirname, '../public/img', image.name));

        await Testimonial.create({
            "name": req.body.name,
            "surname": req.body.surname,
            "profession": req.body.profession,
            "message": req.body.message,
            "image": '/img/' + image.name,
        });

        // res.send("Your testimonial was sent successfully.");
        // Move the redirect inside the try block



        res.redirect('testimonial');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};
