//make a story for that the project has a utility " Students from the Solent Uni can find jobs after graduation, why my app is important, mention from where I downloded the datatset and explain the datatset"
//mongoose import after installation


const express = require('express')
const path = require('path')


const app = express()
app.use(express.static('public'))


//Express sessions
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));


const dotenv = require('dotenv')
dotenv.config();
// console.log(process.env)


//upload a picture in the new insertjob form
const fileUpload= require('express-fileupload')
app.use(fileUpload())


var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json\
app.use(bodyParser.json())


//Import mongoose after the instalation
const mongoose = require('mongoose')

//connection to mongodb

//replace localhost with 127.0.0.1 if does not work 
// mongoose.connect('mongodb://127.0.0.1/jobportal').then(() => {
//     console.log('Connection Successful')
// });



// let mongoDB_uri=process.env.MONGODB_URI_LOCAL
//If you use the MOngoDB Atlas, the following code applies
let mongoDB_uri=process.env.MONGODB_URI_ATLAS
mongoose.connect(mongoDB_uri).then(() => {
    console.log('Connection Successful' )
});



const JobList = require('./models/JobList')
//const jobdetail = require('./models/jobdetail')

//Middleware
const exampleMiddleware = (req, res, next) => {
    // console.log("Thank you for your request. You will get a response soon");
    next();
};

app.use (exampleMiddleware)


//This is Glabal variable. Any global variable are accessible from anywhere even from 'ejs
global.loggedIn=null 
app.use('*', (req, res, next) => {
    // console.log('mysession middleware');
    loggedIn=req.session.userId;
    console.log(loggedIn)
    next();
});


//define a middleware that runs for every request


const ejs = require('ejs')
app.set('view engine', 'ejs')


//app.listen(4000)

const indexController = require('./controllers/index')
app.get('/', indexController)

//app.get('/', function (req, res) {
// console.log(`Received request method = ${req.method}, and URL = ${req.url}`)
//res.send("Welcome to My First Express Page")
//res.sendFile(path.resolve(__dirname,'/pages/index.html'))
//res.render('index')
// })


const aboutController = require('./controllers/about')
app.get('/about', aboutController)
// app.get('/about', (req, res) => { 
//     //res.send("This is All About Us!")
//     //res.sendFile(path.resolve(__dirname,'/pages/about.html'))
//     res.render('about')
// })


// const contactController =require('./controllers/contact')
// app.get('/contact',contactController)
// // app.get('/contact', (req, res) => {
// //     //res.send("This is Our Contact Page!")
// //     //res.sendFile(path.resolve(__dirname,'/pages/contact.html'))
// //     res.render('contact')
// // })


const categoryController = require('./controllers/category')
app.get('/category', categoryController)
// app.get('/category', (req, res) => {
//     //res.send("This is Our Contact Page!")
//     //res.sendFile(path.resolve(__dirname,'/pages/category.html'))
//     res.render('category')
// })


const jobdetailController = require('./controllers/job-detail')
app.get('/job-detail', jobdetailController)
// app.get('/job-detail', (req, res) => {
//     //res.send("This is Our Contact Page!")
//     //res.sendFile(path.resolve(__dirname,'/pages/job-detail.html'))
//     res.render('job-detail')
// })


const jobListController = require('./controllers/job-list')
app.get('/job-list', jobListController)
// app.get('/job-list', (req, res) => {
//     //res.send("This is Our Contact Page!")
//     //res.sendFile(path.resolve(__dirname,'/pages/job-list.html'))
//     res.render('job-list')
// })


const testimonialController = require('./controllers/testimonial')
app.get('/testimonial', testimonialController)
// app.get('/testimonial', (req, res) => {
//     //res.send("This is Our testimonial!")
//     //res.sendFile(path.resolve(__dirname,'/pages/testimonial.html'))
//     res.render('testimonial')
// })


const joblistController = require('./controllers/joblist')
app.get('/joblist', joblistController)
// app.get('/joblist', async(req,res)=> {
//     const joblistItems = await JobList.find();
//     console.log(joblistItems)
//     res.send(joblistItems)
// })


//app.get('*', (req, res) => {
//res.send('Sorry page not found')
//})

const applyjobController = require('./controllers/applyjob')
app.get('/applyjob', applyjobController)


const insertjobformController = require('./controllers/insertjobform')
app.get('/insertjobform', insertjobformController)

const insertjobController = require('./controllers/insertjob')
app.post('/insertjob', insertjobController)

const insertJobValidationMiddleware = (req, res, next) => {
    if (req.body.name == null || req.body.logo() == "") {
        console.log("Sorry, all fields are mandatory");
        return res.redirect("/updateJobForm");
    }
    next();
};


const contactController = require('./controllers/contactform')
app.get('/contact', contactController)


const addcontactController = require('./controllers/addcontact')
app.post('/addcontact', addcontactController)

// Controller for register a new user
const registerformController = require('./controllers/registerform')
app.get('/register', registerformController)


const adduserController = require('./controllers/adduser')
app.post('/adduser', adduserController)

const loginformController = require('./controllers/loginform')
app.get('/loginform', loginformController)

const loginController = require('./controllers/login')
app.post('/login', loginController)

const logoutController = require('./controllers/logout')
app.get('/logout', logoutController)

const addtestimonialController = require('./controllers/addtestimonial')
app.post('/addtestimonial', addtestimonialController)


const addjobController = require('./controllers/addjob')
app.get('/addjob', addjobController)

const deletejobController = require('./controllers/deletejob')
app.get('/joblist/delete/:id', deletejobController)

const updateJobFormController = require('./controllers/updateJobForm')
app.get('/updateJobForm/:id', updateJobFormController)



const updatejobController = require('./controllers/updatejob')
app.post('/updatejob', updatejobController)


// app.get('/addjob', async(req,res) => {
//     const joblistItems = [{   
    // "job_title": "Lead Data Engineer",
//   "employment_type": "FT",
//   "salary_currency": "USD",
//   "salary": 56000,
//   "employee_residence": "PT",
//   "company_location": "US",
//   "experience_level": "MI",
//   "company_size": "M"
//         await JobList.insertMany(joblistItems)
//         res.send("Job has been added successfully.")
// })

const notfoundController = require('./controllers/notfound')
app.get('/notfound', notfoundController)
// app.get('*', (req, res) => {
//     //res.send("Sorry, Page not found!")
//     //res.sendFile(path.resolve(__dirname,'/pages/404.html'))
//     res.render('404')
// })


// const port = 4000;
// const hostname = '127.0.0.1';

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;  

app.listen(port, hostname, () => {
    console.log(`Server ${hostname} is running on port number ${port}`);
    console.log(`Server Url = https://${hostname}:${port}`);
});
