import React, { useEffect } from 'react'

const LetsConnect = ({ pageName }) => {

    return (
        <section className={`about-section ${pageName == "about" ? "" : "ptb-120"}`}>
            <div className="about-element-one">
                <img src="/images/element/element-39.png" alt="element" />
            </div>
            <div className="about-element-two">
                <img src="/images/element/element-40.png" alt="element" />
            </div>
            <div className="about-element-three">
                <img src="/images/element/element-7.png" alt="element" />
            </div>
            <div className="about-element-four">
                <img src="/images/element/element-41.png" alt="element" />
            </div>
            <div className="about-element-five">
                <img src="/images/element/element-42.png" alt="element" />
            </div>
            <div className="container">
                <div className="about-area three">
                    <div className="row justify-content-center align-items-center mb-30-none">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="box-wrapper">
                                <div className="box3"></div>
                                <div className="box1">
                                    <div className="box-element-one">
                                        <img src="/images/element/element-14.png" alt="element" />
                                    </div>
                                    <div className="box-element-two">
                                        <img src="/images/element/element-15.png" alt="element" />
                                    </div>
                                    <div className="box-element-three">
                                        <img src="/images/element/element-13.png" alt="element" />
                                    </div>
                                    <div className="box-element-four">
                                        <img src="/images/element/element-6.png" alt="element" />
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="box-element-five">
                                        <img src="/images/element/element-16.png" alt="element" />
                                    </div>
                                    <div className="box-element-six">
                                        <img src="/images/element/element-7.png" alt="element" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-thumb">
                                {
                                    pageName == "about" || pageName == "service" ?
                                        <img src="/images/element/element-58.png" alt="element" />
                                        : <img src="/images/element/element-38.png" alt="element" />
                                }
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-content">
                                <h2 className="title">Have a project in mind? <span className="text--base">Let's connect</span></h2>
                                <p className="para">We rank among the best in the US, Argentina, and Ukraine. Our apps get featured as best in class, & our clients love our work.</p>
                                <p>Welcome To Softim, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs, pain points and providing business-goals-oriented software solutions.</p>
                                <div className="about-btn">
                                    <a href="contact" className="btn--base" aria-label='Send message'>Send Message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LetsConnect