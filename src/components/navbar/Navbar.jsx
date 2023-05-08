import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src="images/logo.png"
                        style={{width:"30", height:"30"}}
                        // width="30px" height="30px"
                        className="d-inline-block align-top icon ml-5"
                        alt="" />
                    Job Finder
                </a>

                <button className="navbar-toggler"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#title">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#findJob">Find a Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact</a>
                        </li>
                    </ul>
                    <button type="button"
                        className="btn btn-danger ms-auto">Register</button>
                    <button type="button"
                        className="btn btn-outline-danger btn-second">Login</button>
                </div>
            </nav>
        </>
    )
}
