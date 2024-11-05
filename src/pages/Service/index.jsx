import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageMainBanner from '../../components/AboutBanner'
import AllServices from '../../components/AllServices'
import AboutAgency from '../../components/AboutAgency'
import OurDevelopmentProcess from '../../components/OurDevelopmentProcess'
import PricingPlan from '../../components/PricingPlan'
import LetsConnect from '../../components/LetsConnect'
import Header2 from '../../components/Header2'

const ServicePage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Our Services"} />
            <AllServices />
            <AboutAgency />
            <OurDevelopmentProcess />
            <PricingPlan />
            <LetsConnect pageName={"service"} />
            <Footer />

        </>
    )
}

export default ServicePage