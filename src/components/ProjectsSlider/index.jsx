import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const ProjectsSlider = () => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;

            // Assign navigation elements after Swiper has been initialized
            swiperInstance.params.navigation.prevEl = prevButtonRef.current;
            swiperInstance.params.navigation.nextEl = nextButtonRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, []);

    return (
        <section className="gallery-widget-item-section ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="gallery-widget-item-slider">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                loop={true}
                                speed={1000}
                                autoplay={{
                                    delay: 2000,
                                }}
                                spaceBetween={20}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                                className="container"
                                ref={swiperRef}  // Ref for accessing the Swiper instance
                            >
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="gallery-widget-item">
                                            <div className="gallery-widget-thumb">
                                                <img src="/images/gallery/gallery-4.png" alt="gallery" />
                                            </div>
                                            <div className="gallery-widget-content">
                                                <span className="sub-title">BRANDING ILLUSTRATION</span>
                                                <h3 className="title"><a href="project-details.html">Corporate Software Solutions</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="gallery-widget-item">
                                            <div className="gallery-widget-thumb">
                                                <img src="/images/gallery/gallery-4.png" alt="gallery" />
                                            </div>
                                            <div className="gallery-widget-content">
                                                <span className="sub-title">BRANDING ILLUSTRATION</span>
                                                <h3 className="title"><a href="project-details.html">Corporate Software Solutions</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="gallery-widget-item">
                                            <div className="gallery-widget-thumb">
                                                <img src="/images/gallery/gallery-4.png" alt="gallery" />
                                            </div>
                                            <div className="gallery-widget-content">
                                                <span className="sub-title">BRANDING ILLUSTRATION</span>
                                                <h3 className="title"><a href="project-details.html">Corporate Software Solutions</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="slider-nav-area">
                                <div className="slider-prev" ref={prevButtonRef}>
                                    <span>Previous Project</span>
                                </div>
                                <div className="slider-next" ref={nextButtonRef}>
                                    <span>Next Project</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSlider;
