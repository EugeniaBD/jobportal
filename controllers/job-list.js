module.exports = (req, res) => {
    res.render('job-list')
}

const JobList = require('../models/JobList')
module.exports = async (req, res) => {
        const joblistItems = await JobList.find();
        //console.log(joblistItems)
        res.render('job-list', {displayjobs: joblistItems})
}