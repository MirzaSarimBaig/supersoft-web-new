import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Blogs = () => {
    return (
        <section className="blog-section ptb-120">
            <div className="container">
                <div className="row justify-content-center mb-60-none">
                    <div className="col-xl-8 col-lg-8 mb-60">
                        <div className="row justify-content-center mb-60-none">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-4.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Many important brands have
                                            given us their trust</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-5.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Guest Profile: Will Thornton, Author of Are We There Yet?</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-6.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>The 13 Real Traffic Safety Questions We Should Be Asking</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-7.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>How to Safely Road-Trip During a Pandemic</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-8.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Seeking Your Input: Thoughts on Driver-Assistance Technology</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-9.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Guest Profile: Nate Wagner of This App Saves Lives (TASL)</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-10.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Why Distracted Driving Campaigns Often Don’t Work</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-11.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="date">24th March, 2024</span>
                                        </div>
                                        <h3 className="title"><a href="blogDetails" aria-label='Blog details'>Helping You Be Seen, Safely: Introducing the SafetySock®</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-60">
                        <div className="sidebar">
                            <div className="widget-box mb-30">
                                <h4 className="widget-title">Search</h4>
                                <div className="search-widget-box">
                                    <form className="search-form">
                                        <input type="text" name="search" className="form--control" placeholder="Search" />
                                        <button type="submit"><i className="icon-Search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="widget-box mb-30">
                                <h4 className="widget-title">Recent Posts</h4>
                                <div className="popular-widget-box">
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-1.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blogDetails" aria-label='Blog details'>What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-5.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blogDetails" aria-label='Blog details'>What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-7.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blogDetails" aria-label='Blog details'>What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-4.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blogDetails" aria-label='Blog details'>What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-box mb-30">
                                <h4 className="widget-title">Categories</h4>
                                <div className="category-widget-box">
                                    <ul className="category-list">
                                        <li><a href="#0" aria-label=' Business Analysis'><i><FontAwesomeIcon icon={faChevronRight} /></i> Business Analysis <span>4</span></a></li>
                                        <li><a href="#0" aria-label=' Business Strategy'><i><FontAwesomeIcon icon={faChevronRight} /></i> Business Strategy <span>5</span></a></li>
                                        <li><a href="#0" aria-label=' Stock Investment '><i><FontAwesomeIcon icon={faChevronRight} /></i> Stock Investment <span>1</span></a></li>
                                        <li><a href="#0" aria-label=' Business Analysis'><i><FontAwesomeIcon icon={faChevronRight} /></i> Business Analysis <span>4</span></a></li>
                                        <li><a href="#0" aria-label=' Business Analysis'><i><FontAwesomeIcon icon={faChevronRight} /></i> Business Analysis <span>4</span></a></li>
                                        <li><a href="#0" aria-label=' Business Analysis'><i><FontAwesomeIcon icon={faChevronRight} /></i> Business Analysis <span>4</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-box">
                                <h4 className="widget-title">Tags</h4>
                                <div className="tag-widget-box">
                                    <ul className="tag-list">
                                        <li><a href="#0" aria-label='infobpn'>infobpn</a></li>
                                        <li><a href="#0" aria-label='driver'>driver</a></li>
                                        <li><a href="#0" aria-label='newdriver'>newdriver</a></li>
                                        <li><a href="#0" aria-label='Gallery'>Gallery</a></li>
                                        <li><a href="#0" aria-label='manual'>manual</a></li>
                                        <li><a href="#0" aria-label='Office'>Office</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="pagination">
                        <li className="page-item prev">
                            <a className="page-link" href="#" rel="prev" aria-label="Prev &raquo;">PREV</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">01</a></li>
                        <li className="page-item active" aria-current="page"><span className="page-link">02</span></li>
                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item"><a className="page-link" href="#">04</a></li>
                        <li className="page-item"><a className="page-link" href="#">05</a></li>
                        <li className="page-item next">
                            <a className="page-link" href="#" rel="next" aria-label="Next &raquo;">NEXT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Blogs