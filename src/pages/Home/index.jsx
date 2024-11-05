import React from 'react'
import Header from '../../components/Header'
import BannerSection from '../../components/BannerSection'
import BrandSlider from '../../components/BrandSlider'
import RecentProjects from '../../components/RecentProjects'
import WhyChooseUs from '../../components/WhyChooseUs'
import StartupSolutions from '../../components/StartupSolutions'
import OurServices from '../../components/OurServices'
import LetsConnect from '../../components/LetsConnect'
import OurTeam from '../../components/OurTeam'
import ClientReviews from '../../components/ClientReviews'
import CallToAction from '../../components/CallToAction'
import LatestBlogs from '../../components/LatestBlogs'
import Footer from '../../components/Footer'

const HomePage = () => {
    return (
        <>
            <Header />
            <BannerSection />
            <BrandSlider />
            <RecentProjects />
            <WhyChooseUs />
            <StartupSolutions />
            <OurServices />
            <LetsConnect />
            <OurTeam />
            <ClientReviews />
            <CallToAction />
            <LatestBlogs />
            <Footer />
        </>
    )
}

export default HomePage