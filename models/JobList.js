const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobListSchema = new Schema({
    "job_title": String,
    "employment_type": String,
    "salary_currency": String,
    "salary": Number,
    "employee_residence": String,
    "company_location": String,
    "experience_level": String,
    "company_size": String,
    "logo": String,
    "deadline": String
});

const JobList = mongoose.model('JobList', JobListSchema, 'joblist');

module.exports = JobList;
