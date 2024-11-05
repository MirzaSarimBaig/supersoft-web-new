import React from 'react'
import PageMainBanner from '../../components/AboutBanner'
import ProjectsGallery from '../../components/ProjectsGallery'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'

const ProjectPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Our Projects"} />
            <ProjectsGallery />
            <Footer />

        </>
    )
}

export default ProjectPage