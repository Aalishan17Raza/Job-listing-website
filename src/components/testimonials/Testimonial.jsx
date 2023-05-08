import React from 'react'

export const Testimonial = () => {
    return (
        <div>
            <section id="testimonials">
                <div id="testimonial-part" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="testimonial-image" src="images/emp1.webp" alt="emp1-profile" />
                            <p><em className="name">Swati Sood,</em></p>
                            <p><em className="work">FSL Group</em></p>
                            <h2 className="testimonial-text">This is to inform you that it's been 1 year we are using this Portal and if I look back to my recruitment report, I have recruited 78 employees of sales and technical profile. So, all thanks to JobFinder</h2>
                        </div>
                        <div className="carousel-item">
                            <img className="testimonial-image" src="images/emp2.jpeg" alt="emp2-profile" />
                            <p><em className="name">Jaison Varghese,</em></p>
                            <p><em className="work">SKYLINE Job Search</em></p>
                            <h2 className="testimonial-text">JobFinders services are very good. We are happy with their assistance. Thanks for helping and supporting us very well...</h2>
                        </div>
                        <div className="carousel-item">
                            <img className="testimonial-image" src="images/emp3.jpeg" alt="emp3-profile" />
                            <p><em className="name">Steffi Steven,</em></p>
                            <p><em className="work">JR Technologies</em></p>
                            <h2 className="testimonial-text">We have been using JF services and we really feel glad that we chose it. It always provides us a good set of Database together with best pre & post sale services... Hope this continues in future as well.</h2>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-part" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target="#testimonial-part" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id="press">
                <img className="press-img" src="images/techcrunch.png" alt="tc-logo" />
                <img className="press-img" src="images/tnw.png" alt="tnw-logo" />
                <img className="press-img" src="images/bizinsider.png" alt="biz-insider-logo" />
                <img className="press-img" src="images/mashable.png" alt="mashable-logo" />
            </section>

        </div>
    )
}
