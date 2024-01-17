const Register = require('../models/Register');

module.exports = async (req, res) => {
    try {
        console.log(req.body);

        await Register.create({
            "name": req.body.name,
            "email": req.body.email,
            "user": req.body.user, 
            "password": req.body.password, 
        });

        console.log("User registered successfully.");
        // res.status(200).send("User registered successfully.");
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }

    res.redirect ('loginform')
};
