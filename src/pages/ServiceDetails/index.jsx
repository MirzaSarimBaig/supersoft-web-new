import React from 'react'
import PageMainBanner from '../../components/AboutBanner'
import Footer from '../../components/Footer'
import ServiceDetailsSection from '../../components/ServiceDetailsSection'
import Header2 from '../../components/Header2'

const ServiceDetails = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Service Details"} />
            <ServiceDetailsSection />
            <Footer />

        </>
    )
}

export default ServiceDetails