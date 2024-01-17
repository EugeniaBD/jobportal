const JobList = require('../models/JobList');
const JobListDept = require('../models/JobListWithDept');
const path = require('path');

module.exports = async (req, res) => {
    console.log(req.body);
    let logo = req.files.logo;
    console.log(logo.name);

    // Move logo to the specified path
    logo.mv(path.resolve(__dirname, '../public/img', logo.name));
        // Create a new job in JobList model
        const newJob = await JobList.create({
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
        });

        // Create a new document in JobListDept model
        await JobListDept.create({
            job_title: req.body.job_title,
            dept: req.body.dept,
        });

        res.redirect('/');

};
