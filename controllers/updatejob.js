const JobList = require('../models/JobList')
const path = require('path')
module.exports = async (req, res) => {
    // console.log('I am in the update job controller')
    console.log(req.body)
    let logo = req.files.logo;
    console.log(logo.name);
    //console.log(path.extname(logo.name))
    logo.mv(path.resolve(__dirname, '../public/img', logo.name))
    
    await JobList.updateOne({_id: req.body._id}, {
        job_title: req.body.job_title,
        employment_type: req.body.employment_type,
        salary_currency: req.body.salary_currency,
        salary: req.body.Salary,
        employee_residence: req.body.Employee_residence,
        company_location: req.body.company_location,
        experience_level: req.body.experience_level,
        company_size: req.body.company_size,
        logo: '/img/' + logo.name,
        deadline: req.body.deadline,
    })

    res.redirect('/')


}