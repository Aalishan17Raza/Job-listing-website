import React from 'react'

export const Pricing = () => {
    return (
        <div>
            <section id="pricing">

                <h2 className="pricing-text">Pricing JobFinder Portal</h2>
                <hr />
                <div className="row">
                    <div className=" pricing-col col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="pricing-title">Single</h3>
                            </div>
                            <div className="card-body">
                                <h2 className="pricing-text">Rs190</h2>
                                <p>Premium Support</p>
                                <p>Template Update</p>
                                <p>FOR 1 YEAR</p>
                                <button className="btn btn-lg w-100 btn-outline-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className=" pricing-col col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="pricing-title">Membership</h3>
                            </div>
                            <div className="card-body">
                                <h2 className="pricing-text">Rs349 / mo</h2>
                                <p>Premium Support</p>
                                <p>Template Update</p>
                                <p>FOR 1 YEAR</p>
                                <button className="btn btn-lg w-100 btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-col col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="pricing-title">Lifetime</h3>
                            </div>
                            <div className="card-body">
                                <h2 className="pricing-text">Rs500 / mo</h2>
                                <p>Premium Support</p>
                                <p>Template Update</p>
                                <p>FOR LIFETIME</p>
                                <button className="btn btn-lg w-100 btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta">
                <h3 className="cta-heading">Make a difference by pursuing your dream career.</h3>
                <button type="button" className="btn btn-dark btn-lg download-btn">
                    <i className="fa-brands fa-apple"></i> Download</button>
                <button type="button" className="btn btn-outline-dark btn-lg download-btn">
                    <i className="fa-brands fa-google-play"></i> Download</button>
            </section>
        </div>
    )
}
