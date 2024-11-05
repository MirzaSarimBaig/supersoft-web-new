import React from 'react'

const RecentProjects = () => {
    return (
        <section className="project-section pb-120">
            <div className="project-element-one">
                <img src="/images/element/element-23.png" alt="element" />
            </div>
            <div className="project-element-two">
                <img src="/images/element/element-24.png" alt="element" />
            </div>
            <div className="project-element-three">
                <img src="/images/element/element-25.png" alt="element" />
            </div>
            <div className="project-element-four">
                <img src="/images/element/element-26.png" alt="element" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-header-wrapper">
                            <div className="section-header">
                                <h2 className="section-title">Our Recent Projects</h2>
                                <p>Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>
                            </div>
                            <div className="section-header-btn">
                                <a href="project" aria-label='All projects' className="custom-btn">View All Projects <i className="icon-Group-2361 ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-item-wrapper">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-30">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <img src="/images/project/project-1.png" alt="project" />
                                </div>
                                <div className="project-overlay">
                                    <div className="overlay-content">
                                        <h4 className="title"><a href="projectDetails" aria-label='Project details'>Brand redesign meanwhile <br /> focusing product</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-30">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <img src="/images/project/project-2.png" alt="project" />
                                </div>
                                <div className="project-overlay">
                                    <div className="overlay-content">
                                        <h4 className="title"><a href="projectDetails" aria-label='Project Details'>Brand redesign meanwhile <br /> focusing product</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentProjects