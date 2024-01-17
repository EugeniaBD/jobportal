const bcrypt = require('bcrypt');
const Register = require('../models/Register');

module.exports = async (req, res) => {
    console.log('I am in the login controller');
    const user = await Register.findOne({ email: req.body.email });
    console.log(user)

        if (user) {
            const encryptedPassword = user.password;
            const unencryptedPassword=req.body.password;
            console.log('This user exists');
            bcrypt.compare(unencryptedPassword, encryptedPassword, (error, matchedPassword) => {
                if (matchedPassword) {
                    console.log('User logged in successfully');
                    req.session.userId=user._id
                    console.log(req.session)
                    // req.session.userType=user.type
                    // console.log('req.session')
                    res.redirect('/');
                } else {
                    console.log('Invalid password');
                    res.render('loginform', { 
                        invalidemail:null,
                        invalidpassword: "Invalid user password. Please check your password" });
                }
            });
        } 
        else {
            console.log('User not found');
            res.render('loginform', { 
                invalidemail: "Invalid user. Please check your email",
                invalidpassword: null
            });
        }
};
