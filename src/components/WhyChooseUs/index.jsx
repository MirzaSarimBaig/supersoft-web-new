import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const WhyChooseUs = () => {
    const [openTab, setOpenTab] = useState("company-tab")
    const [awesomeSolutions, setAwesomeSolutions] = useState(0);
    const [trustedClients, setTrustedClients] = useState(0);
    const [servedCountries, setServedCountries] = useState(0);

    useEffect(() => {
        // Trigger animations with a delay for each statistic
        const timeout1 = setTimeout(() => setAwesomeSolutions(40), 2000);
        const timeout2 = setTimeout(() => setTrustedClients(20), 2000);
        const timeout3 = setTimeout(() => setServedCountries(10), 2000);

        // Cleanup timeouts
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);
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
                            <h2 className="section-title">Why Choose Supersoft?</h2>
                            <p>We blend creativity with expertise, delivering innovative IT solutions that align perfectly with your business goals. We go beyond conventional methods to craft unique solutions that set you apart.</p>
                        </div>
                    </div>
                </div>
                <div className="choose-area">
                    <div className="choose-tab">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className={`nav-link ${openTab == "software-tab" ? "active" : ""}`} onClick={() => setOpenTab("software-tab")} id="software-tab" data-toggle="tab" data-target="#software" type="button" role="tab" aria-controls="software" aria-selected="false" aria-label='Software Developer'>Top Software House</button>
                                <button className={`nav-link ${openTab == "company-tab" ? "active" : ""}`} onClick={() => setOpenTab("company-tab")} id="company-tab" data-toggle="tab" data-target="#company" type="button" role="tab" aria-controls="company" aria-selected="true" aria-label='Growing Company'>Quality and Reliability</button>
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
                                        <h4 className="title"><span className="text--base">About SuperSoft</span> Software Development</h4>
                                        <p>Welcome to Supersoft Corporation, your trusted partner in digital transformation. We specialize in addressing your unique business challenges, needs, and goals to deliver impactful, goal-oriented software solutions. At Supersoft, we believe in close, transparent collaboration and actively encourage client involvement throughout every stage of the development process.</p>
                                        <div className="choose-statistics-area">
                                            <div className="row mb-30-none">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title">
                                                                    <Odometer value={awesomeSolutions} format="d" duration={3000} />
                                                                </h3>
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
                                                                <h3 className="odo-title">
                                                                    <Odometer value={trustedClients} format="d" duration={3000} />
                                                                </h3>
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
                                                                <h3 className="odo-title">
                                                                    <Odometer value={servedCountries} format="d" duration={3000} />
                                                                </h3>
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
                                        <h4 className="title"><span className="text--base">About Supersoft</span> Quality & Relaibility</h4>
                                        <p>Our commitment to quality drives every project. With transparent communication and a focus on excellence, we ensure each solution meets the highest standards, delivering real value to your business.
                                            <br />
                                            As your trusted technology partner, we prioritize professionalism, integrity, and reliability. You can count on us to be there when you need us, keeping your success at the forefront.</p>
                                        <div className="choose-statistics-area">
                                            <div className="row mb-30-none">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title">
                                                                    <Odometer value={awesomeSolutions} format="d" duration={3000} />
                                                                </h3>
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
                                                                <h3 className="odo-title">
                                                                    <Odometer value={trustedClients} format="d" duration={3000} />
                                                                </h3>
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
                                                                <h3 className="odo-title">
                                                                    <Odometer value={servedCountries} format="d" duration={3000} />
                                                                </h3>
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
                                        <h4 className="title"><span className="text--base">About Supersoft</span> Client Demand</h4>
                                        <p>At Supersoft Corporation, client satisfaction is our top priority. We are committed to not only meeting but exceeding your expectations by delivering tailored IT solutions that drive real results for your business. With a client-focused approach, we ensure that every project is aligned with your unique vision, needs, and goals.
                                            <br />
                                            Through open communication, reliability, and a dedication to quality, we strive to build lasting partnerships based on trust and satisfaction. Our team works closely with you at every stage, adapting to feedback and making sure you are fully satisfied with the outcome. At Supersoft, your success is our success, and we’re here to support you every step of the way.
                                        </p>
                                        <div className="choose-statistics-area">
                                            <div className="row mb-30-none">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                                    <div className="statistics-item">
                                                        <div className="statistics-content">
                                                            <div className="odo-area">
                                                                <h3 className="odo-title">
                                                                    <Odometer value={awesomeSolutions} format="d" duration={3000} />
                                                                </h3>
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
                                                                <h3 className="odo-title">
                                                                    <Odometer value={trustedClients} format="d" duration={3000} />
                                                                </h3>
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
                                                                <h3 className="odo-title">
                                                                    <Odometer value={servedCountries} format="d" duration={3000} />
                                                                </h3>
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