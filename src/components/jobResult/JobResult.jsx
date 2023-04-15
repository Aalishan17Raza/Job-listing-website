import React from 'react'
import "./jobResult.css"

export const JobResult = ({ data }) => {
    return (
        <div className='jobResultContainer'>
            <div className='Top'>
                {data.employer_logo &&
                    <img className='companyLogo' src={data.employer_logo} alt="" />}
                <h2>{data.job_title}</h2>
            </div>
            <div className="companyName">{data.employer_name}</div>
            {data.job_is_remote &&
                <div>Remote</div>}
            <div>{data.job_employment_type}</div>
            {data.job_required_experience.required_experience_in_months &&
                <div>Experience Required: {data.job_required_experience.required_experience_in_months} months
                </div>}
            <a href={data.job_apply_link} target='_blank'>Apply</a>
        </div>
    )
}
