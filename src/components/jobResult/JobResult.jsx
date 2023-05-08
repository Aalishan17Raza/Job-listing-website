import React from 'react'
import "./jobResult.css"

export const JobResult = ({ data }) => {
    return (
        <div className='jobResultContainer'>
            <div className='ContainerLeft'>
                {data.employer_logo &&
                    <img className='companyLogo' src={data.employer_logo} alt="" />}
            </div>
            <div className='ContainerRight'>
                <div className="companyName">{data.employer_name}</div>
                <div className='JobTitle'>{data.job_title}</div>
                {data.job_is_remote &&
                    <div>Remote</div>}
                <div>{data.job_employment_type}</div>
                {data.job_required_experience.required_experience_in_months &&
                    <div>Experience Required: {data.job_required_experience.required_experience_in_months} months
                    </div>}
                <a href={data.job_apply_link} target='_blank' className='applyLink'>Apply</a>
            </div>
        </div>
    )
}
