import React from 'react'
import Calendly from '../Calendly'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


const ContactUsOptions = () => {
    return (
        <section className="contact-item-section ptb-120">
            <div className="contact-item-element-one">
                <img src="/images/element/element-71.png" alt="element" />
            </div>
            <div className="contact-item-element-two">
                <img src="/images/element/element-72.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center mb-30-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="contact-item text-center">
                            <div className="contact-icon-area">
                                <div className="contact-icon">
                                    <i >
                                        <FontAwesomeIcon icon={faMapLocationDot} className='contact-icon-size' />
                                    </i>
                                </div>
                            </div>
                            <div className="contact-content">
                                <h3 className="title">Visit Our Office</h3>
                                <p>72 Main Drive, Calibry, FL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="contact-item text-center">
                            <div className="contact-icon-area">
                                <div className="contact-icon">
                                    <i >
                                        <FontAwesomeIcon icon={faPhone} className='contact-icon-size' />
                                    </i>
                                </div>
                            </div>
                            <div className="contact-content">
                                <h3 className="title">Call Us</h3>
                                <p><a href="#" aria-label='Company number'>+1 (604) 243-2388</a> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="contact-item text-center">
                            <div className="contact-icon-area">
                                <div className="contact-icon">
                                    <i>
                                        <FontAwesomeIcon icon={faEnvelopeOpenText} className='contact-icon-size' />
                                    </i>
                                </div>
                            </div>
                            <div className="contact-content">
                                <h3 className="title">Mail Us</h3>
                                <p><a href="mailto:" aria-label='Company mail'>contact@supersoft.com.pk</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-40'>
                <Calendly />
            </div>
        </section>
    )
}

export default ContactUsOptions