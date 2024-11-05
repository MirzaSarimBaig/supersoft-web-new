import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const WhyChooseUs = () => {
    const [openTab, setOpenTab] = useState("company-tab")
    return (
        <section className="choose-section pb-120">
            <div className="choose-element-one" data-aos="fade-left" data-aos-duration="1200">
                <img src="/images/element/element-28.png" alt="element" />
            </div>
            <div className="choose-element-two">
                <img src="/images/element/element-29.png" alt="element" />
            </div>
            <div className="choose-element-three">
                <img src="/images/element/element-30.png" alt="element" />
            </div>
            <div className="choose-element-four">
                <img src="/images/element/element-31.png" alt="element" />
            </div>
            <div className="choose-element-five">
                <img src="/images/element/element-32.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="section-header">
                            <h2 className="section-title">Why Choose Softim?</h2>
                            <p>We rank among the best in the US, Argentina, and Ukraine. Our apps get featured as best in class, and our clients love our work.</p>
                        </div>
                    </div>
                </div>
                <div className="choose-area">
                    <div className="choose-tab">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className={`nav-link ${openTab == "software-tab" ? "active" : ""}`} onClick={() => setOpenTab("software-tab")} id="software-tab" data-toggle="tab" data-target="#software" type="button" role="tab" aria-controls="software" aria-selected="false" aria-label='Software Developer'>Top Software Developer</button>
                                <button className={`nav-link ${openTab == "company-tab" ? "active" : ""}`} onClick={() => setOpenTab("company-tab")} id="company-tab" data-toggle="tab" data-target="#company" type="button" role="tab" aria-controls="company" aria-selected="true" aria-label='Growing Company'>Fastest-Growing Company</button>
                                <button className={`nav-link ${openTab == "client-tab" ? "active" : ""}`} onClick={() => setOpenTab("client-tab")} id="client-tab" data-toggle="tab" data-target="#client" type="button" role="tab" aria-controls="client" aria-selected="false" aria-label='Client Satisfaction'>100% Client's Satisfaction</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${openTab == "software-tab" ? "active show" : ""}`} id="software" role="tabpanel" aria-labelledby="software-tab">
                                <div className="choose-item">
                                    <div className="choose-thumb">
                                        <img src="/images/element/element-27.png" alt="element" />
                                    </div>
                                    <div className="choose-content">
                                        <h4 className="title"><span className="text--base">About Softim</span> Software Development</h4>
                                        <p>Welcome To Softim, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs, pain points and providing business-goals-oriented software solutions. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.</p>
                                        <div className="choose-statistics-area">
                                            <div className="row mb-30-none">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="150">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Awesome Solutions</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="350">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Trusted Clients</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="25">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Served Countries</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose-content-footer">
                                            <div className="choose-btn">
                                                <a href="contact" aria-label='Contact us' className="btn--base active">Contact us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${openTab == "company-tab" ? "active show" : ""}`} id="company" role="tabpanel" aria-labelledby="company-tab">
                                <div className="choose-item">
                                    <div className="choose-thumb">
                                        <img src="/images/element/element-77.png" alt="element" />
                                    </div>
                                    <div className="choose-content">
                                        <h4 className="title"><span className="text--base">About Softim</span> Digital Agency</h4>
                                        <p>Welcome To Softim, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs, pain points and providing business-goals-oriented software solutions. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.</p>
                                        <div className="choose-statistics-area">
                                            <div className="row mb-30-none">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="150">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Awesome Solutions</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="350">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Trusted Clients</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="25">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Served Countries</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose-content-footer">
                                            <div className="choose-btn">
                                                <a href="contact" aria-label='Contact us' className="btn--base active">Contact us</a>
                                            </div>
                                            <div className="choose-video-btn">
                                                <a className="video" aria-label='Youtube video' data-rel="lightcase:myCollection" href="https://www.youtube.com/embed/6zsr22OeF2I">
                                                    <i>
                                                        <FontAwesomeIcon icon={faVideo} />
                                                    </i>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${openTab == "client-tab" ? "active show" : ""}`} id="client" role="tabpanel" aria-labelledby="client-tab">
                                <div className="choose-item">
                                    <div className="choose-thumb">
                                        <img src="/images/element/element-78.png" alt="element" />
                                    </div>
                                    <div className="choose-content">
                                        <h4 className="title"><span className="text--base">About Softim</span> Client Demand</h4>
                                        <p>Welcome To Softim, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs, pain points and providing business-goals-oriented software solutions. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.</p>
                                        <div className="choose-statistics-area">
                                            <div className="row mb-30-none">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="150">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Awesome Solutions</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="350">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Trusted Clients</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title odometer" data-odometer-final="25">0</h3>
                                                                <h3 className="title">+</h3>
                                                            </div>
                                                            <p>Served Countries</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose-content-footer">
                                            <div className="choose-btn">
                                                <a href="contact" aria-label='Contact us' className="btn--base active">Contact us</a>
                                            </div>
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

export default WhyChooseUs