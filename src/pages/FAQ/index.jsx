import React from 'react'
import FAQSection from '../../components/FAQSection'
import Footer from '../../components/Footer'
import PageMainBanner from '../../components/AboutBanner'
import Header2 from '../../components/Header2'

const FAQPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Frequently Asked Question"} />
            <FAQSection />
            <Footer />
        </>
    )
}

export default FAQPage