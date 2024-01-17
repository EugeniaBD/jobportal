const JobList = require('../models/JobList')
module.exports = async (req, res) => {
        const joblistItems = await JobList.find();
        console.log(joblistItems)
        res.send(joblistItems)
    }