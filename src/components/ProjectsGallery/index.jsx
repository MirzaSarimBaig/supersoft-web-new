import React from 'react'

const ProjectsGallery = () => {
    return (
        <section className="gallery-section ptb-120">
            <div className="container">
                <div className="gallery-filter-wrapper">
                    <div className="button-group filter-btn-group two">
                        <button className="active" data-filter="*">All</button>
                        <button data-filter=".design">Web Development</button>
                        <button data-filter=".webdev">Software Development </button>
                        <button data-filter=".marketing">Digital marketing</button>
                        <button data-filter=".appdev">UX/UI Design</button>
                    </div>
                    <div className="grid two d-flex flex-wrap">
                        <div className="grid-item design marketing">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-10.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" aria-label='Gallery image' data-rel="lightcase:myCollection" href="/images/gallery/gallery-10.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html" >Modern Technology</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item webdev marketing">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-2.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-2.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Corporate Software Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item appdev design">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-3.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-3.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Ecommerce Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item appdev design">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-11.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-11.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Modern Technology</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item webdev">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-4.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-4.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Corporate Software Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item marketing">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-5.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-5.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Ecommerce Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item design">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-6.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-6.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Modern Technology</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item webdev">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-7.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-7.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Corporate Software Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item two marketing">
                            <div className="gallery-item">
                                <div className="gallery-thumb">
                                    <img src="/images/gallery/gallery-12.png" alt="gallery" />
                                    {/* <div className="gallery-thumb-overlay">
                                        <div className="gallery-icon">
                                            <a className="img-popup" data-rel="lightcase:myCollection" href="/images/gallery/gallery-9.png"><img src="/images/icon/icon-21.png" alt="icon" /></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="gallery-content">
                                    <span className="sub-title">BRANDING ILLUSTRATION</span>
                                    <h3 className="title"><a href="project-details.html">Ecommerce Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsGallery