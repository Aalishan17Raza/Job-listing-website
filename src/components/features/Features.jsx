import React from 'react'

export const Features = () => {
    return (
        <div>
            <section id="features">
                <div className="row">
                    <div className="feature-box col-lg-4">
                        <i className="fa-solid fa-circle-check fa-4x icon"></i>
                        <h3 className="feature-text">Easy to use.</h3>
                        <p>So easy to use, even a toddler could do it.</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="fa-solid fa-bullseye icon fa-4x icon"></i>
                        <h3 className="feature-text">Elite Clientele</h3>
                        <p>We have all categories of jobs, the greatest jobs.</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="fa-solid fa-heart fa-4x icon"></i>
                        <h3 className="feature-text">Guaranteed to work.</h3>
                        <p>Find your dream job and give leap to your career or your money back.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
