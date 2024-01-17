// module.exports = (req, res) => {
//     res.render('/')
// }

const JobList = require('../models/JobListWithDept')
module.exports = async (req, res) => {
        const JobListWithDeptItems = await JobListWithDept.find();
        //console.log(joblistItems)
        res.render('JobListWithDept', {jobListWithDept: JobListWithDeptItems})
}