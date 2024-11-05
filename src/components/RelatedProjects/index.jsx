import React from 'react'

const RelatedProjects = () => {
    return (
        <section className="gallery-section ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="section-header">
                            <h2 className="section-title">Related Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-30-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="gallery-item">
                            <div className="gallery-thumb">
                                <img src="/images/gallery/gallery-10.png" alt="gallery" />
                                <div className="gallery-thumb-overlay">
                                    <div className="gallery-icon">
                                        <a className="img-popup" aria-label='Gallery icon' data-rel="lightcase:myCollection" href="/images/gallery/gallery-10.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-content">
                                <span className="sub-title">BRANDING ILLUSTRATION</span>
                                <h3 className="title"><a href="project-details.html" aria-label='Modern Technology'>Modern Technology</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="gallery-item">
                            <div className="gallery-thumb">
                                <img src="/images/gallery/gallery-2.png" alt="gallery" />
                                <div className="gallery-thumb-overlay">
                                    <div className="gallery-icon">
                                        <a className="img-popup" aria-label='Gallery icon' data-rel="lightcase:myCollection" href="/images/gallery/gallery-2.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-content">
                                <span className="sub-title">BRANDING ILLUSTRATION</span>
                                <h3 className="title"><a href="project-details.html" aria-label='Software Solutions'>Corporate Software Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="gallery-item">
                            <div className="gallery-thumb">
                                <img src="/images/gallery/gallery-3.png" alt="gallery" />
                                <div className="gallery-thumb-overlay">
                                    <div className="gallery-icon">
                                        <a className="img-popup" aria-label='Gallery icon' data-rel="lightcase:myCollection" href="/images/gallery/gallery-3.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-content">
                                <span className="sub-title">BRANDING ILLUSTRATION</span>
                                <h3 className="title"><a href="project-details.html" aria-label='Ecommerce Solutions'>Ecommerce Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedProjects