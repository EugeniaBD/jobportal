const Contactus= require ('../models/Contactus')
module.exports = async(req, res) => {

    console.log (req.body)
    await Contactus.create({

    "name" : req.body.name,
    "surname" : req.body.surname,
    "email" : req.body.email,
    "subject" : req.body.subject,
    "message" : req.body.message,

   })
    // res.send("Your message was sent successfully.")
    console.log('Your message was sent successfully')
    res.redirect('/');

}
