import React from 'react'
export const About = () => {
    const jobs = [
        { company: "ABC Inc.", logo: "images/abc.jpeg", designation: "Web Developer", salary: "80,000" },
        { company: "XYZ Corp.", logo: "images/xyz.png", designation: "Software Engineer", salary: "90,000" },
        { company: "PQR Ltd.", logo: "images/PQR.png", designation: "Data Analyst", salary: "70,000" }
    ];
    return (
        <>
            <section id="About">
                <div id="About-part" class="carousel">
                    <div class="About-item">
                        <p><em class="name" style={{ fontSize: '2rem' }}>ABOUT US</em></p>
                        <h5 class="About-text" >Online job portal is a web application. It provides the candidates,ability to register to this application searching for jobs,manage their accounts. Each candidate will have an account with their own home page.With the born of an internet, most of the people have started searching jobs over an internet.Looking such requirement,people are making much use of an Internet rather than the print media for finding employee or jobs. Now employers and employees are searching Online job portals for finding employees and jobs respectively.The purpose of the application is to provide Job portal seekers,to submit their CV and apply for job,where Employer can select best Employees from available candidates profile. </h5>
                    </div>
                </div>
            </section>
            <section id="findJob">
                <h1 style={{ color: "#00008b" }}>Featured Jobs</h1>
                <div id="jobs-list">

                    {jobs.map((job) => {
                        return (<>
                            <div className='job'>
                                <img className='job-logo' alt='' src={job.logo} />
                                <div className='job-details'>
                                    <h2 className='job-company'>{job.company}</h2>
                                    <h3 className='job-designation'>{job.designation}</h3>
                                    <p className='job-salary'>Salary : {job.salary}</p>
                                </div>
                            </div>
                        </>)
                    })}

                </div>
            </section>
        </>
    )
}
