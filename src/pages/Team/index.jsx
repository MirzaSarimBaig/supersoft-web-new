import React from 'react'
import PageMainBanner from '../../components/AboutBanner'
import Footer from '../../components/Footer'
import AllTeamMembers from '../../components/AllTeamMembers'
import Header2 from '../../components/Header2'

const TeamPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Our Team"} />
            <AllTeamMembers />
            <Footer />
        </>
    )
}

export default TeamPage