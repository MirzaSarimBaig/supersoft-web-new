import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const BlogDetails = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <section className="blog-section ptb-120">
            <div className="container">
                <div className="row justify-content-center mb-60-none">
                    <div className="col-xl-8 col-lg-8 mb-60">
                        <div className="row justify-content-center mb-60-none">
                            <div className="col-xl-12 mb-60">
                                <div className="blog-item details">
                                    <div className="blog-thumb">
                                        <img src="/images/blog/blog-big-2.png" alt="blog" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-post-meta">
                                            <span className="user">By : Smith Roy</span>
                                            <span className="category two">24th March, 2024</span>
                                        </div>
                                        <h3 className="title">Many important brands have given us their trust</h3>
                                        <p>There are many reasons why an executive or VIP would choose personal security services. Executives could be in charge of large companies that are worth millions or more, leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to they do not need necessarily need to be..</p>
                                        <ul className="blog-list">
                                            <li>Free Download Instagram Logo</li>
                                            <li>Illustrator from Instagram Logo 9 Vectors svg vector collection</li>
                                            <li>Vectors SVG vector illustration graphic art design format.</li>
                                            <li>Following vectors are from the same pack as this vector also</li>
                                            <li>Instagram Logo SVG Vector is a part of Social Websites</li>
                                        </ul>
                                        <p>The use of bodyguards with executives and VIPs is on the rise due to their many benefits, with the first one being obvious that they can help defend against physical harm. A bodyguard should be well trained in defense and know how to handle a possible attack.</p>
                                        <div className="blog-widget-thumb-area">
                                            <div className="row justify-content-center mb-20-none">
                                                <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                                                    <div className="blog-widget-thumb">
                                                        <img src="/images/blog/blog-6.png" alt="blog" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                                                    <div className="blog-widget-thumb">
                                                        <img src="/images/blog/blog-5.png" alt="blog" />
                                                        <div className="blog-widget-video">
                                                            <div className="video-main">
                                                                <div className="promo-video">
                                                                    <div className="waves-block">
                                                                        <div className="waves wave-1"></div>
                                                                        <div className="waves wave-2"></div>
                                                                        <div className="waves wave-3"></div>
                                                                    </div>
                                                                </div>
                                                                <a className="video-icon video" aria-label='Youtube video' data-rel="lightcase:myCollection" href="https://www.youtube.com/embed/6zsr22OeF2I">
                                                                    <i><FontAwesomeIcon icon={faPlay} /></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <div className="quote-area d-flex flex-wrap">
                                                <div className="quote-icon">
                                                    <i className="icon-Producing_Icone"></i>
                                                </div>
                                                <div className="quote-content-area">
                                                    <p className="quote-content">Producing Ideas Is The Main Way To Grow The Economy
                                                        Life Insurance for Stay-at-Home Parents</p>
                                                    <span>JHON SMITH</span>
                                                </div>
                                            </div>
                                        </blockquote>
                                        <p>An executive of VIP bodyguard can also check for potential vulnerability in the home and/or transportation, even transportation routes, adding extra reinforcement or making changes where needed. They can give helpful advice on how to stay safe and what to do in the event of a dangerous situation. Finally, a bodyguard presence can act as a deterrent against potential dangers. When a bodyguard is seen, it may put people off from trying anything against highly trained personal security. Of course, some people may prefer their bodyguards in plain clothing.</p>
                                        <div className="blog-tag-wrapper">
                                            <span>Tags:</span>
                                            <ul className="blog-footer-tag">
                                                <li><a href="#0" aria-label='Drivers'>Drivers</a></li>
                                                <li><a href="#0" aria-label='Event'>Event</a></li>
                                            </ul>
                                        </div>
                                        <nav>
                                            <ul className="pagination two">
                                                <li className="page-item prev">
                                                    <a className="page-link" href="#" rel="prev" aria-label="Prev &raquo;">
                                                        <FontAwesomeIcon icon={faChevronLeft} />

                                                    </a>
                                                </li>
                                                <li className="page-item tags"><a className="page-link" aria-label='Blogs page' href="blog">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                                            <path fill-rule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clip-rule="evenodd" />
                                                        </svg>

                                                    </i>
                                                </a></li>
                                                <li className="page-item next">
                                                    <a className="page-link" href="#" rel="next" aria-label="Next &raquo;">
                                                        <FontAwesomeIcon icon={faChevronRight} />

                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="blog-related-area">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="blog-section-header">
                                                        <div className="section-header">
                                                            <h3 className="section-title">Top Related Post</h3>
                                                        </div>
                                                        <div className="slider-nav-area">
                                                            <div className="slider-prev" ref={prevRef}>
                                                                {/* <i className="fas fa-chevron-left"></i> */}
                                                                <FontAwesomeIcon icon={faChevronLeft} />

                                                            </div>
                                                            <div className="slider-next" ref={nextRef}>
                                                                {/* <i className="fas fa-chevron-right"></i> */}
                                                                <FontAwesomeIcon icon={faChevronRight} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="row justify-content-center">
                                                <div className="col-xl-12">
                                                    <div className="blog-slider-area">
                                                        <div className="blog-slider">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
                                                                    <div className="blog-item">
                                                                        <div className="blog-thumb">
                                                                            <img src="/images/blog/blog-8.png" alt="blog" />
                                                                        </div>
                                                                        <div className="blog-content">
                                                                            <div className="blog-post-meta">
                                                                                <span className="user">By : Smith Roy</span>
                                                                                <span className="category two"> 24th March, 2021</span>
                                                                            </div>
                                                                            <h3 className="title"><a href="blog-details.html">Many important brands have
                                                                                given us their trust</a></h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="blog-item">
                                                                        <div className="blog-thumb">
                                                                            <img src="/images/blog/blog-11.png" alt="blog" />
                                                                        </div>
                                                                        <div className="blog-content">
                                                                            <div className="blog-post-meta">
                                                                                <span className="user">By : Smith Roy</span>
                                                                                <span className="category two"> 24th March, 2021</span>
                                                                            </div>
                                                                            <h3 className="title"><a href="blog-details.html">Many important brands have
                                                                                given us their trust</a></h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <Swiper
                                                modules={[Autoplay, Navigation]}
                                                loop={true}
                                                speed={1000}
                                                autoplay={{
                                                    delay: 2000
                                                }}
                                                spaceBetween={20}
                                                Navigation={{
                                                    prevRef: prevRef.current,
                                                    nextRef: nextRef.current,
                                                }}
                                                onInit={(swiper) => {
                                                    swiper.params.navigation.prevEl = prevRef.current;
                                                    swiper.params.navigation.nextEl = nextRef.current;
                                                    swiper.navigation.init();
                                                    swiper.navigation.update();
                                                }}
                                                breakpoints={{
                                                    640: {
                                                        slidesPerView: 2,
                                                    },
                                                    0: {
                                                        slidesPerView: 1,
                                                    }
                                                }}
                                                className='container'
                                            >
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <div className="blog-item">
                                                            <div className="blog-thumb">
                                                                <img src="/images/blog/blog-8.png" alt="blog" />
                                                            </div>
                                                            <div className="blog-content">
                                                                <div className="blog-post-meta">
                                                                    <span className="user">By : Smith Roy</span>
                                                                    <span className="category two"> 24th March, 2021</span>
                                                                </div>
                                                                <h3 className="title"><a href="blog-details.html" aria-label='Blog details'>Many important brands have
                                                                    given us their trust</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>

                                                    <div className="swiper-slide">
                                                        <div className="blog-item">
                                                            <div className="blog-thumb">
                                                                <img src="/images/blog/blog-11.png" alt="blog" />
                                                            </div>
                                                            <div className="blog-content">
                                                                <div className="blog-post-meta">
                                                                    <span className="user">By : Smith Roy</span>
                                                                    <span className="category two"> 24th March, 2021</span>
                                                                </div>
                                                                <h3 className="title"><a href="blog-details.html" aria-label='Blog details'>Many important brands have
                                                                    given us their trust</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>

                                                    <div className="swiper-slide">
                                                        <div className="blog-item">
                                                            <div className="blog-thumb">
                                                                <img src="/images/blog/blog-11.png" alt="blog" />
                                                            </div>
                                                            <div className="blog-content">
                                                                <div className="blog-post-meta">
                                                                    <span className="user">By : Smith Roy</span>
                                                                    <span className="category two"> 24th March, 2021</span>
                                                                </div>
                                                                <h3 className="title"><a href="blog-details.html" aria-label='Blog details'>Many important brands have
                                                                    given us their trust</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="blog-comment-area">
                                            <h3 className="title">Leave A Comments</h3>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <form className="comment-form">
                                                <div className="row justify-content-center mb-25-none">
                                                    <div className="col-xl-6 col-lg-6 form-group">
                                                        <input type="text" name="name" className="form--control" placeholder="Your name*" />
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 form-group">
                                                        <input type="email" name="email" className="form--control" placeholder="Your email*" />
                                                    </div>
                                                    <div className="col-lg-12 form-group">
                                                        <textarea className="form--control" placeholder="Write message*"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 form-group">
                                                        <button type="submit" className="btn--base mt-10">Submit Now <i className="fas fa-arrow-right ml-2"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
                                            <h5 className="title"><a href="blog-details.html">What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-5.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blog-details.html">What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-7.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blog-details.html">What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-popular-item d-flex flex-wrap align-items-center">
                                        <div className="popular-item-thumb">
                                            <img src="/images/blog/blog-4.png" alt="blog" />
                                        </div>
                                        <div className="popular-item-content">
                                            <span className="blog-date">24th March, 2024</span>
                                            <h5 className="title"><a href="blog-details.html">What Is Going On In South West London.</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-box mb-30">
                                <h4 className="widget-title">Categories</h4>
                                <div className="category-widget-box">
                                    <ul className="category-list">
                                        <li><a href="#0"><i className="fas fa-chevron-right"></i> Business Analysis <span>4</span></a></li>
                                        <li><a href="#0"><i className="fas fa-chevron-right"></i> Business Strategy <span>5</span></a></li>
                                        <li><a href="#0"><i className="fas fa-chevron-right"></i> Stock Investment <span>1</span></a></li>
                                        <li><a href="#0"><i className="fas fa-chevron-right"></i> Business Analysis <span>4</span></a></li>
                                        <li><a href="#0"><i className="fas fa-chevron-right"></i> Business Analysis <span>4</span></a></li>
                                        <li><a href="#0"><i className="fas fa-chevron-right"></i> Business Analysis <span>4</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-box">
                                <h4 className="widget-title">Tags</h4>
                                <div className="tag-widget-box">
                                    <ul className="tag-list">
                                        <li><a href="#0">infobpn</a></li>
                                        <li><a href="#0">driver</a></li>
                                        <li><a href="#0">newdriver</a></li>
                                        <li><a href="#0">Gallery</a></li>
                                        <li><a href="#0">manual</a></li>
                                        <li><a href="#0">Office</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails