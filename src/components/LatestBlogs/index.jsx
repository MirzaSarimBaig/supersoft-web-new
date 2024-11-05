import React from 'react'

const LatestBlogs = () => {
    return (
        <section className="blog-section pb-130">
            <div className="blog-element">
                <img src="/images/element/element-47.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="section-header">
                            <h2 className="section-title">Softim Latest Posts</h2>
                            <p>Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-40-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="blog-item">
                            <div className="blog-thumb">
                                <img src="/images/blog/blog-1.png" alt="blog" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-post-meta">
                                    <span className="user">By : Smith Roy</span>
                                    <span className="date">24th March, 2024</span>
                                </div>
                                <h3 className="title"><a href="blogDetails" aria-label='Blog details'>It was popularised in the 1960s
                                    with the release</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="blog-item">
                            <div className="blog-thumb">
                                <img src="/images/blog/blog-2.png" alt="blog" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-post-meta">
                                    <span className="user">By : Smith Roy</span>
                                    <span className="date">24th March, 2024</span>
                                </div>
                                <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Making it look like readable
                                    English Language.</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div className="blog-item">
                            <div className="blog-thumb">
                                <img src="/images/blog/blog-3.png" alt="blog" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-post-meta">
                                    <span className="user">By : Smith Roy</span>
                                    <span className="date">24th March, 2024</span>
                                </div>
                                <h3 className="title"><a href="blogDetails" aria-label='Blog details'>It is a long established fact that a
                                    reader will be</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestBlogs