const JobList= require ('../models/JobList')
const JobListWithDept = require('../models/JobListWithDept');
module.exports = async(req, res) => {
    console.log(req.params.id)
    await JobList.deleteOne({_id: req.params.id})
    await JobListWithDept.deleteOne({_id: req.params.id})

    console.log ("Job has been successfully deleted.")
    //await JobList.insertMany(joblistItems)
    // res.send("Job has been successfully deleted.")
    res.redirect('/job-list')

}