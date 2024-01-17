const JobList= require ('../models/JobList')
module.exports = async(req, res) => {
    const joblistItems = [
        {

            job_title: "UX",
            employment_type: "PT",
            salary_currency: "GBP",
            salary: 90000,
            employee_residence: "UK",
            company_location: "EUR",
            experience_level: "ADV",
            company_size: "M",
            logo: "logo",
            
        }]

    await JobList.insertMany(joblistItems)
    res.send("Job has been added successfully.")

}