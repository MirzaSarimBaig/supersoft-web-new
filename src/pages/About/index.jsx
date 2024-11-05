import React from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import AboutAgency from '../../components/AboutAgency'
import LetsConnect from '../../components/LetsConnect'
import OurTeam from '../../components/OurTeam'
import ClientReviews from '../../components/ClientReviews'
import BrandSlider from '../../components/BrandSlider'
import Footer from '../../components/Footer'
import PageMainBanner from '../../components/AboutBanner'
import Header2 from '../../components/Header2'


const AboutPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"About Us"} />
            <WhoWeAre />
            <AboutAgency />
            <LetsConnect pageName={"about"} />
            <OurTeam />
            <ClientReviews />
            <BrandSlider />
            <Footer />


        </>
    )
}

export default AboutPage