const JobList = require('../models/JobList');
const testimonialList = require('../models/Testimonial');
const JobWithDeptList = require('../models/JobListWithDept');
// const FilterByDept = require('../models/FilterByDept');

module.exports = async (req, res) => {
    try {
        // Fetch data from different models
        const joblistItems = await JobList.find();
        const testimonialItems = await testimonialList.find();
        
        // Uncomment the line below if you want to use FilterByDeptList
        // const filterbydeptItems = await FilterByDeptList.find();

        // const selectedCategory = await FilterByDeptList.find({ dept: filterbydeptItems });
        
        // Now, 'selectedCategory' contains the documents matching the selected department
        
        // Aggregate data for JobListWithDept
        const JobListWithDeptItems = await JobWithDeptList.aggregate([
            {
                $group: {
                    _id: '$dept', // Use '$dept' to refer to the 'dept' field in the documents
                    count: { $sum: 1 } 
                }
            }
        ]);
        
        // Render the view with the fetched data
        // console.log('JobListWithDept:', JobListWithDeptItems); // Log the data to the console
        res.render('index', { displayjobs: joblistItems, testimoniallist: testimonialItems, jobListWithDept: JobListWithDeptItems });
    } catch (error) {
        // Handle errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
