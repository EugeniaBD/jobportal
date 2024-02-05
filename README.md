
# Graduates Job Portal 


The Graduates Job Portal emerged from a deep motivation to address the challenges recent graduates face in transitioning from academic life to the professional world. The project was not merely an assignment; it was born out of a genuine desire to make a meaningful impact on the lives of students entering the job market.

**Motivation**
The motivation behind this initiative stems from the recognition of a prevalent issue – the daunting journey graduates undertake as they navigate the complexities of securing employment. The project seeks to decrease the struggles faced by students who often find themselves challenging situation: needing experience to get a job and a job to gain experience.

**Why This Project?**
The Graduates Job Portal was conceived as a solution to a real-world problem, not just as an academic exercise. The intention was to create a dedicated platform that goes beyond a typical job portal. It aims to be a transformative tool that not only connects graduates with job opportunities but also empowers them to showcase their skills and potential effectively.

**Problem Solving**
This project addresses the fundamental problem of recent graduates encountering extended periods of unemployment or difficulty in securing positions aligned with their qualifications. By providing a user-centric platform, the Graduates Job Portal serves as a bridge between graduates and employers, offering a seamless experience for both parties.

**Learning Experience**
The journey of developing the Graduates Job Portal was a rich learning experience. It provided insights into web development, database design, and the balance between user satisfaction and system security. The project emphasized adaptability, collaboration, and continuous improvement as essential aspects of the development process. 
In both the *js and *ejs files, evident traces of continuous code refinement and enhanced functionality are observable. As the development unfolds, certain lines have been deactivated and transformed into comments, and subsequently substituted with more optimized and improved code lines. 


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)



## Installation

Press 'Win'+ 'R' to open Command Prompt, type 'cmd' and press'Enter' key. Follow the steps below to install and run the project locally.


**1. Clone the Repository:** using the link below:

 ``` git clone https://github.com/EugeniaBD/jobportal.git ```

**2. Navigate to Project Directory:** 

```cd <your-project-name>```

**3. Install Dependencies:** 
Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.
- [MongoDB](https://www.mongodb.com/) database set up (if applicable).

Open the project Folder using Visual Studio code. Open a new terminal. and write the code below:

```npm install```

**4. Set Up Environment Variables:** 

- Create a .env file in the root directory.
- Add necessary environment variables like MongoDB 

**5. Run the Application:** 
In the terminal , write the command below:

```npm start```

**6. Access the Application:** 

Open your web browser and go to 'http://localhost:5000'

## Usage

Access Graduates Job Portal as described above.

The website enables users to perform CRUD operations (Create, Read, Update, and Delete). To initiate these actions, user registration is required. If an unlogged user attempts to apply for a job, the Login/Register page will be prompted. Log in if is you have login credentials, alternatively click on 'Register' in order to register as a new user.

-**CREATE** - Users can add a new job, register as a new user, contact the page administrator through 'Contact Us' and write a testimonial on the Testimonial Form.

-**READ** - Vacancies can be viewed on the main page as well as the testimonials. If Logged in, by accesisng Jobs/JobList where you can browse jobs by type (All/Full-Time or Part-Time)

-**UPDATE**-if Logged in, users can update a job by accesisng Jobs/JobList where you can find the job that needs updating, then click "Update" button. User can chose which filds wants to be updated. By clicking 'Save', changes will be saved for that particular job.

-**DELETE** -if Logged in, users can update a job by accesisng Jobs/JobList where you can find the job that needs updating, then click "Delete" button. The selected job will be deleted from the database

## Credits

###  Project Author

- [Eugenia Stanciu](https://github.com/EugeniaBD) 

### Third-Party Assets

- Template by [CSS Template](https://www.free-css.com/free-css-templates/page294/jobentry/)

### Tutorials

- [Node.js and Express Tutorial](https://www.example-tutorial.com)
- [MongoDB Setup Guide](https://www.example-guide.com)
- [EJS Templating Engine Documentation](https://www.example-docs.com)


## License

This project is licensed under the [HTML Codex License](https://htmlcodex.com/license/). You can obtain a copy of the license [here](LICENSE.txt).


## Features

- **User Authentication:** Secure registration and login system for users.
- **CRUD Operations:** Perform Create, Read, Update, and Delete operations on job listings.
- **Dynamic Views:** Utilizes EJS templating engine for rendering dynamic and interactive interfaces.
- **Job Application Handling:** Routes and controllers manage job applications seamlessly.
- **Contact Forms:** Established routes and controllers for handling user queries and feedback.
- **Error Handling:** Implemented error-handling system, including a 404 not found page.
- **Scalability:** Designed for scalability to ensure optimal performance during increased user traffic.
- **Security Measures:** Implements data encryption and regular security audits to protect user information.
- **Logging Operations:** Provides feedback through console logs for successful database connections and server startup.

## How to Contribute
Your contribution to the Graduates Job Portal is highly valued. To contribute, please follow these steps:

-**Contact the Author:** Reach out to the project author, Eugenia Stanciu, expressing your interest in contributing. You can contact her through GitHub or other available channels.

-**Discuss Your Ideas:** Engage in a discussion with the author about your proposed contributions. Share your ideas, suggestions, or any features you would like to work on. This ensures alignment with project goals and avoids duplicating efforts.

-**Collaborate:** Once your contributions are approved and discussed, collaborate with the author to implement the changes. This may involve creating new features, fixing bugs, or enhancing existing functionalities.

-**Testing:** Thoroughly test your changes to ensure they work as intended and do not introduce new issues. This step is crucial to maintain the project's stability.

-**Submit Changes:** If you have direct access to the project repository, create a branch for your changes, commit them, and push to the repository. If not, submit your changes to the author for review.

-**Review and Merge:** Your changes will be reviewed by the project author. Any necessary feedback or adjustments will be communicated. Once approved, your contributions will be merged into the main project.

By contributing to the Graduates Job Portal, you play a vital role in improving the project and making a positive impact on the community. Thank you for your interest and willingness to contribute!