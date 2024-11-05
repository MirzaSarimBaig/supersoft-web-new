import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section pt-120">
            <div className="footer-element-one">
                <img src="/images/element/element-48.png" alt="element" />
            </div>
            <div className="footer-element-two">
                <img src="/images/element/element-39.png" alt="element" />
            </div>
            <div className="footer-element-three">
                <img src="/images/element/element-40.png" alt="element" />
            </div>
            <div className="footer-element-four">
                <img src="/images/element/element-7.png" alt="element" />
            </div>
            <div className="footer-element-five">
                <img src="/images/element/element-41.png" alt="element" />
            </div>
            <div className="footer-element-six">
                <img src="/images/element/element-42.png" alt="element" />
            </div>
            <div className="footer-element-seven">
                <img src="/images/element/element-39.png" alt="element" />
            </div>
            <div className="container">
                <div className="row mb-30-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a className="site-logo site-title" href="index.html" aria-label='Logo'><img src="/images/logo-two.png" alt="site-logo" /></a>
                            </div>
                            <p>Treker was founded in 1991 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</p>
                            <ul className="footer-social">
                                <li><a href="#0" aria-label='Link to facebook'><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                <li><a href="#0" aria-label='Link to twitter'><i ><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                <li><a href="#0" aria-label='Link to google'><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a></li>
                                <li><a href="#0" aria-label='Link to instagram'><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h5 className="title">About us</h5>
                            <ul className="footer-list">
                                <li><a href="#0" aria-label='About Us'>About Us</a></li>
                                <li><a href="#0" aria-label='Community Blog'>Community Blog</a></li>
                                <li><a href="#0" aria-label='Rewards'>Rewards</a></li>
                                <li><a href="#0" aria-label='Work with Us'>Work with Us</a></li>
                                <li><a href="#0" aria-label='Contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h4 className="title">Explore Softim</h4>
                            <ul className="footer-list">
                                <li><a href="#0" aria-label='Account'>Account</a></li>
                                <li><a href="#0" aria-label='Privacy Policy'>Privacy Policy</a></li>
                                <li><a href="#0" aria-label='Affilitate'>Affilitate</a></li>
                                <li><a href="#0" aria-label='Program'>Program</a></li>
                                <li><a href="#0" aria-label='Our Partner'>Our Partner</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h4 className="title">Quick Links</h4>
                            <ul className="footer-list">
                                <li><a href="#0" aria-label='About us'>About us</a></li>
                                <li><a href="#0" aria-label='News & press'>News & press</a></li>
                                <li><a href="#0" aria-label='Blog'>Blog</a></li>
                                <li><a href="#0" aria-label='FAQs'>FAQs</a></li>
                                <li><a href="#0" aria-label='Careers'>Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 text-center">
                            <div className="copyright-area">
                                <p>Copyright © 2024 <a href="index.html" aria-label='copyright'>Softim</a>. All Rights Reserved. Designed by ThemeIM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer