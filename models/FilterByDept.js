const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilterByDeptSchema = new Schema({
    "job_title": String,
    "employment_type": String,
    "salary_currency": String,
    "salary": Number,
    "employee_residence": String,
    "company_location": String,
    "experience_level": String,
    "company_size": String,
    "logo": String,
    "deadline": String,
    "dept": String
}, { versionKey: false });

const FilterByDeptList = mongoose.model('FilterByDept', FilterByDeptSchema, 'filterbydept');

module.exports = FilterByDeptList;
