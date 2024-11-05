import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const OurTeam = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <section className="team-section ptb-130">
            <div className="team-element">
                <img src="/images/element/element-43.png" alt="element" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-header-wrapper">
                            <div className="section-header">
                                <h2 className="section-title">Softim Expert Team</h2>
                                <p>We rank among the best in the US, Argentina, and Ukraine. Our apps get featured as best in class, and our clients love our work.</p>
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
                {/* <div className="row justify-content-center mb-10-none">
                    <div className="col-xl-12">
                        <div className="team-slider-area">
                            <div className="team-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="team-item">
                                            <div className="team-thumb">
                                                <img src="/images/team/team-1.png" alt="team" />
                                                <div className="team-social-area">
                                                    <ul className="team-social">
                                                        <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="title"><a href="team-details.html">Nilkusa Agawal</a></h3>
                                                <span className="sub-title">Sr. Marketer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-item">
                                            <div className="team-thumb">
                                                <img src="/images/team/team-2.png" alt="team" />
                                                <div className="team-social-area">
                                                    <ul className="team-social">
                                                        <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="title"><a href="team-details.html" aria-label='Team Name'>Abhisek Roy</a></h3>
                                                <span className="sub-title">Havey Truck Instructor</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-item">
                                            <div className="team-thumb">
                                                <img src="/images/team/team-3.png" alt="team" />
                                                <div className="team-social-area">
                                                    <ul className="team-social">
                                                        <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                                        <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="title"><a href="team-details.html">Rashmika Mandana</a></h3>
                                                <span className="sub-title">Lady Instructor</span>
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
                        1024: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                    className='container'
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/images/team/team-2.png" alt="team" />
                                    <div className="team-social-area">
                                        <ul className="team-social">
                                            <li><a href="#0" aria-label='Link to facebook'><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to twitter'><i ><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to google'><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to instagram'><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="team-details.html" aria-label='Team Name'>Abhisek Roy</a></h3>
                                    <span className="sub-title">Havey Truck Instructor</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/images/team/team-2.png" alt="team" />
                                    <div className="team-social-area">
                                        <ul className="team-social">
                                            <li><a href="#0" aria-label='Link to facebook'><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to twitter'><i ><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to google'><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to instagram'><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="team-details.html" aria-label='Team Name'>Abhisek Roy</a></h3>
                                    <span className="sub-title">Havey Truck Instructor</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/images/team/team-2.png" alt="team" />
                                    <div className="team-social-area">
                                        <ul className="team-social">
                                            <li><a href="#0" aria-label='Link to facebook'><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to twitter'><i ><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to google'><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to instagram'><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="team-details.html" aria-label='Team Name'>Abhisek Roy</a></h3>
                                    <span className="sub-title">Havey Truck Instructor</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/images/team/team-2.png" alt="team" />
                                    <div className="team-social-area">
                                        <ul className="team-social">
                                            <li><a href="#0" aria-label='Link to facebook'><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to twitter'><i ><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to google'><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a></li>
                                            <li><a href="#0" aria-label='Link to instagram'><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="team-details.html" aria-label='Team Name'>Abhisek Roy</a></h3>
                                    <span className="sub-title">Havey Truck Instructor</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default OurTeam