const JobList= require ('../models/JobList')
module.exports = async (req, res) => {
    // console.log(req.params.id)
    // await JobList.findOne({_id: req.params.id})
   const result=  await JobList.findById(req.params.id)
   
    res.render('updatejobform',{JobList:result})
}

