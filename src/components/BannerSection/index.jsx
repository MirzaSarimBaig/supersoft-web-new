import React, { useEffect, useState } from 'react'

const BannerSection = () => {

    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setIsActive(true)
        }, 1000);
    }, [])

    return (
        <section className="banner-section">
            <div className="banner-text">
                <span>TECH</span>
            </div>
            <div className="banner-element-one">
                <img src="/images/element/element-3.png" alt="element" />
            </div>
            <div className="banner-element-two">
                <img src="/images/element/element-4.png" alt="element" />
            </div>
            <div className="banner-element-three">
                <img src="/images/element/element-5.png" alt="element" />
            </div>
            <div className="banner-element-four">
                <img src="/images/element/element-6.png" alt="element" />
            </div>
            <div className="banner-element-five">
                <img src="/images/element/element-7.png" alt="element" />
            </div>
            <div className={`banner-group-shape ${isActive ? "active" : ""}`}>
                <div className="banner-group-element-one">
                    <img src="/images/element/element-8.png" alt="element" />
                </div>
                <div className="banner-group-element-two">
                    <img src="/images/element/element-9.png" alt="element" />
                </div>
                <div className="banner-group-element-three">
                    <img src="/images/element/element-10.png" alt="element" />
                </div>
                <div className="banner-group-element-four">
                    <img src="/images/element/element-6.png" alt="element" />
                </div>
                <div className="banner-group-element-five">
                    <img src="/images/element/element-5.png" alt="element" />
                </div>
                <div className="banner-group-element-six">
                    <img src="/images/element/element-11.png" alt="element" />
                </div>
                <div className="banner-group-element-seven">
                    <img src="/images/element/element-12.png" alt="element" />
                </div>
                <div className="banner-group-element-eight">
                    <img src="/images/element/element-13.png" alt="element" />
                </div>
                <div className="banner-group-element-nine">
                    <img src="/images/element/element-14.png" alt="element" />
                </div>
                <div className="banner-group-element-ten">
                    <img src="/images/element/element-15.png" alt="element" />
                </div>
                <div className="banner-group-element-eleven">
                    <img src="/images/element/element-16.png" alt="element" />
                </div>
                <div className="banner-group-element-twelve">
                    <img src="/images/element/element-17.png" alt="element" />
                </div>
                <div className="banner-group-element-thirteen">
                    <img src="/images/element/element-18.png" alt="element" />
                </div>
                <div className="banner-group-element-fourteen">
                    <img src="/images/element/element-19.png" alt="element" />
                </div>
                <div className="banner-group-element-fifteen">
                    <img src="/images/element/element-20.png" alt="element" />
                </div>
                <div className="banner-group-element-sixteen">
                    <img src="/images/element/element-21.png" alt="element" />
                </div>
                <div className="banner-group-element-seventeen">
                    <img src="/images/element/element-22.png" alt="element" />
                </div>
            </div>
            <div className="container custom-container">
                <div className="row align-items-end mb-30-none">
                    <div className="col-xl-7 col-lg-7 mb-30">
                        <div className="banner-content" data-aos="fade-right" data-aos-duration="1800">
                            <h1 className="title" >
                                Empowering Your Business with Cutting-Edge IT Solutions</h1>
                            <span className="sub-title">Build Your Innovations & Digital Future</span>
                            <p>At Supersoft Corporation, we provide tailored IT solutions to help businesses of all sizes thrive in the digital world. From innovative software development and sleek website design to data-driven analytics and engaging mobile apps, we offer the technology and expertise to elevate your brand. No matter your industry or business size, we are your trusted partner in driving growth, efficiency, and success through customized IT services.</p>
                            <div className="banner-arrow">
                                <img src="/images/element/element-1.png" alt="element" />
                            </div>
                            <div className="banner-widget">
                                <div className="banner-widget-wrapper">
                                    <div className="banner-widget-left">
                                        <div className="banner-widget-thumb">
                                            <img src="/images/element/element-2.png" alt="element" />
                                        </div>
                                    </div>
                                    <div className="banner-widget-middle">
                                        <div className="banner-widget-content">
                                            <p><span>15+</span> Satisfied Clients</p>
                                        </div>
                                    </div>
                                    <div className="banner-widget-right">
                                        <div className="banner-widget-btn">
                                            <a href="#0" aria-label='Contact us' className="btn--base">Let's Talk</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection