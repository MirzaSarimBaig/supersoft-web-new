import React from 'react'
import Footer from '../../components/Footer'
import PageMainBanner from '../../components/AboutBanner'
import ProjecDescription from '../../components/ProjectDescription'
import ProjectsSlider from '../../components/ProjectsSlider'
import RelatedProjects from '../../components/RelatedProjects'
import Header2 from '../../components/Header2'

const ProjectDetailsPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Project Details"} />
            <ProjecDescription />
            <ProjectsSlider />
            <RelatedProjects />
            <Footer />

        </>
    )
}

export default ProjectDetailsPage