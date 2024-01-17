const mongoose=require('mongoose')

const Schema = mongoose.Schema;

jobDetailSchema = new Schema ({
    "job_title": String,
    "employment_type": String,
    "salary_currency": String,
    "salary": Number,
    "employee_residence": String,
    "company_location": String,
    "experience_level": String,
    "company_size": String,
    "logo": File,
    "size" : {
        "h": Number,
        "w": Number,
        "uom":String
    },
    "status" :String
});

const Jobdetail = mongoose.model('Jobdetails', 'jobDetailSchema', 'jobdetail')