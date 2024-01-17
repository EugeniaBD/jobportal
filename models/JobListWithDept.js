const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobDeptListSchema = new Schema({
    job_title: String,
    dept: String,
}, { versionKey: false });

const JobDeptList = mongoose.model('JobListDept', JobDeptListSchema, 'jobdept');

module.exports = JobDeptList;
