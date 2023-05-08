import { Navbar } from "../navbar/Navbar"
import React, { useState } from 'react'
import axios from "axios";
import { JobResult } from '../jobResult/JobResult';

export const TitleSection = () => {
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
        <>
            <section id="title">
                <div className="container-fluid">
                    <Navbar />
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="tagline big-heading">Find the most exciting jobs.</h1>
                            <div className="input-group">
                                <form onSubmit={handleSubmit} className="input-group">
                                    <input name='jobTitle' type="text" className="form-control" placeholder="Job title or keyword" aria-label="Sizing input" aria-describedby="inputGroup-sizing-sm" />
                                    <input name='jobLocation' type="text"
                                        id="inputGroupSelect04"
                                        className="form-control"
                                        placeholder="Location"
                                        aria-label="Sizing input"
                                        aria-describedby="inputGroup-sizing-sm" />
                                    <button className="btn btn-danger" type="submit">Find job</button>
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <img className="title-image"
                                src="images/professional_pic-2-removebg-preview.jpg"
                                alt="professional-pic" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="AllJobContainer">
                {data.length > 0 && data.map(d => {
                    return (<JobResult key={d.job_id} data={d} />)
                })}
            </div>
        </>
    )
}
