import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact-section ptb-120">
            <div className="contact-element-one">
                <img src="/images/element/element-73.png" alt="element" />
            </div>
            <div className="contact-element-two">
                <img src="/images/element/element-74.png" alt="element" />
            </div>
            <div className="container">
                <form className="contact-form">
                    <div className="row justify-content-center mb-25-none">
                        <div className="col-xl-6 col-lg-6 form-group">
                            <label>Enter Name</label>
                            <input type="text" name="name" className="form--control" placeholder="Jhon david smith" />
                        </div>
                        <div className="col-xl-6 col-lg-6 form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" className="form--control" placeholder="jhonsmith@gmail.com" />
                        </div>
                        <div className="col-xl-6 col-lg-6 form-group">
                            <label>Your Phone</label>
                            <input type="text" name="number" className="form--control" placeholder="+1 (900) 696 3600"
                            // oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" 
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 form-group">
                            <label>Select Subject</label>
                            <div className="contact-select">
                                <select className="form--control">
                                    <option value="1">Web Development</option>
                                    <option value="2">Web Design</option>
                                    <option value="3">Digital Marketing</option>
                                    <option value="4">Search SEO</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 form-group">
                            <label>Write Message</label>
                            <textarea name="message" className="form--control" placeholder="Write Here ..."></textarea>
                        </div>
                        <div className="col-xl-12 col-lg-12 form-group text-center">
                            <button type="submit" className="btn--base mt-20" aria-label='Submit button'>Send Now <i className="fas fa-arrow-right ml-2"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm