import React, { useState } from 'react'
import axios from "axios";
import { JobResult } from '../jobResult/JobResult';
export const SearchArea = () => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = async (endpoint, query) => {
        const options = {
            method: 'GET',
            url: `https://jsearch.p.rapidapi.com/${endpoint}`,
            params: { ...query },
            headers: {
                'X-RapidAPI-Key': '8937218935msh3dcef8af18a9b23p198ee1jsna2a6cb7dd260',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        };

        setisLoading(true);
        try {
            axios.request(options).then(function (response) {
                setData(response.data.data);
            }).catch(function (error) {
                setError(error);
                console.log("There is an error. Please Try again!");
            });
        } catch (error) {
            setError(error);
            console.log("There is an error. Please Try again!");
        } finally {
            setisLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.jobTitle.value)
        console.log(e.target.jobLocation.value)
        const query = e.target.jobTitle.value + " " + e.target.jobLocation.value
        console.log(query);
        fetchData('search', { query: query, num_pages: 1 })
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='jobTitle' placeholder='Enter the job Title' />
                <input name='jobLocation' placeholder='Enter the job Location' />
                <button type='submit'>Search</button>
            </form>
            {data.length > 0 && data.map(d => {
                return (<JobResult key={d.job_id} data={d} />)
            })}

        </div>
    )
}
