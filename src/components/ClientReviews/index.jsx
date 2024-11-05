import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const ClientReviews = () => {
    return (
        <section className="client-section ptb-120">
            <div className="client-element-one">
                <img src="/images/element/element-44.png" alt="element" />
            </div>
            <div className="client-element-two">
                <img src="/images/element/element-45.png" alt="element" />
            </div>
            <div className="client-element-three">
                <img src="/images/element/element-46.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="section-header">
                            <h2 className="section-title">Hear from happy customers</h2>
                            <p>Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="client-area">
                    <div className="row justify-content-center mb-10-none">
                        <div className="col-xl-12">
                            <div className="client-slider-area">
                                <div className="client-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="client-item">
                                                <div className="client-header">
                                                    <div className="client-ratings">
                                                        <span className="ratings">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </span>
                                                    </div>
                                                    <div className="client-quote">
                                                        <img src="/images/client/quote.png" alt="quote" />
                                                    </div>
                                                </div>
                                                <div className="client-content">
                                                    <p>A testimonial is effectively a
                                                        review or recommendation from
                                                        a client, letting other people
                                                        know how your products.</p>
                                                </div>
                                                <div className="client-footer">
                                                    <div className="client-footer-user-thumb">
                                                        <img src="/images/client/client-1.png" alt="client" />
                                                    </div>
                                                    <div className="client-footer-user-content">
                                                        <h6 className="title">Mogan Smith</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="client-item">
                                                <div className="client-header">
                                                    <div className="client-ratings">
                                                        <span className="ratings">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </span>
                                                    </div>
                                                    <div className="client-quote">
                                                        <img src="/images/client/quote.png" alt="quote" />
                                                    </div>
                                                </div>
                                                <div className="client-content">
                                                    <p>A testimonial is effectively a
                                                        review or recommendation from
                                                        a client, letting other people
                                                        know how your products.</p>
                                                </div>
                                                <div className="client-footer">
                                                    <div className="client-footer-user-thumb">
                                                        <img src="/images/client/client-2.png" alt="client" />
                                                    </div>
                                                    <div className="client-footer-user-content">
                                                        <h6 className="title">Manisha Kai</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="client-item">
                                                <div className="client-header">
                                                    <div className="client-ratings">
                                                        <span className="ratings">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </span>
                                                    </div>
                                                    <div className="client-quote">
                                                        <img src="/images/client/quote.png" alt="quote" />
                                                    </div>
                                                </div>
                                                <div className="client-content">
                                                    <p>A testimonial is effectively a
                                                        review or recommendation from
                                                        a client, letting other people
                                                        know how your products.</p>
                                                </div>
                                                <div className="client-footer">
                                                    <div className="client-footer-user-thumb">
                                                        <img src="/images/client/client-3.png" alt="client" />
                                                    </div>
                                                    <div className="client-footer-user-content">
                                                        <h6 className="title">Evana Parsia</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-pagination"></div>
                                    <div className="slider-prev">
                                        <i className="las la-long-arrow-alt-left"></i>
                                    </div>
                                    <div className="slider-next">
                                        <i className="las la-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2000
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        // 768: {
                        //     slidesPerView: 3,
                        // },
                        1024: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className='container'
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="client-item">
                                <div className="client-header">
                                    <div className="client-ratings">
                                        <span className="ratings">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="client-quote">
                                        <img src="/images/client/quote.png" alt="quote" />
                                    </div>
                                </div>
                                <div className="client-content">
                                    <p>A testimonial is effectively a
                                        review or recommendation from
                                        a client, letting other people
                                        know how your products.</p>
                                </div>
                                <div className="client-footer">
                                    <div className="client-footer-user-thumb">
                                        <img src="/images/client/client-1.png" alt="client" />
                                    </div>
                                    <div className="client-footer-user-content">
                                        <h6 className="title">Mogan Smith</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="client-item">
                                <div className="client-header">
                                    <div className="client-ratings">
                                        <span className="ratings">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="client-quote">
                                        <img src="/images/client/quote.png" alt="quote" />
                                    </div>
                                </div>
                                <div className="client-content">
                                    <p>A testimonial is effectively a
                                        review or recommendation from
                                        a client, letting other people
                                        know how your products.</p>
                                </div>
                                <div className="client-footer">
                                    <div className="client-footer-user-thumb">
                                        <img src="/images/client/client-1.png" alt="client" />
                                    </div>
                                    <div className="client-footer-user-content">
                                        <h6 className="title">Mogan Smith</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="client-item">
                                <div className="client-header">
                                    <div className="client-ratings">
                                        <span className="ratings">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="client-quote">
                                        <img src="/images/client/quote.png" alt="quote" />
                                    </div>
                                </div>
                                <div className="client-content">
                                    <p>A testimonial is effectively a
                                        review or recommendation from
                                        a client, letting other people
                                        know how your products.</p>
                                </div>
                                <div className="client-footer">
                                    <div className="client-footer-user-thumb">
                                        <img src="/images/client/client-1.png" alt="client" />
                                    </div>
                                    <div className="client-footer-user-content">
                                        <h6 className="title">Mogan Smith</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="client-item">
                                <div className="client-header">
                                    <div className="client-ratings">
                                        <span className="ratings">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="client-quote">
                                        <img src="/images/client/quote.png" alt="quote" />
                                    </div>
                                </div>
                                <div className="client-content">
                                    <p>A testimonial is effectively a
                                        review or recommendation from
                                        a client, letting other people
                                        know how your products.</p>
                                </div>
                                <div className="client-footer">
                                    <div className="client-footer-user-thumb">
                                        <img src="/images/client/client-1.png" alt="client" />
                                    </div>
                                    <div className="client-footer-user-content">
                                        <h6 className="title">Mogan Smith</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default ClientReviews