import React from 'react'
import PageMainBanner from '../../components/AboutBanner'
import ContactUsOptions from '../../components/ContactUsOptions'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'
import Calendly from '../../components/Calendly'
import Header2 from '../../components/Header2'

const ContactPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Contact Us"} />
            <ContactUsOptions />
            <ContactForm />
            <div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.1899657893728!2d90.42380431666383!3d23.779746865573756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7499f257eab%3A0xe6b4b9eacea70f4a!2sManama+Tower!5e0!3m2!1sen!2sbd!4v1561542597668!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen></iframe>
            </div>
            <Footer />


        </>
    )
}

export default ContactPage