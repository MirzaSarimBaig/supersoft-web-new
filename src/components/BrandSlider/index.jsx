import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const BrandSlider = () => {
    return (
        // <div className="brand-section oh ptb-120">
        //     <div className="container">
        //         <div className="row justify-content-center">
        //             <div className="col-xl-12">
        //                 <div className="brand-slider-area">
        //                     <div className="brand-slider">
        //                         <div className="swiper-wrapper">
        //                             <div className="swiper-slide">
        //                                 <div className="brand-item">
        //                                     <img src="/images/brand/brand-1.png" alt="brand" />
        //                                 </div>
        //                             </div>
        //                             <div className="swiper-slide">
        //                                 <div className="brand-item">
        //                                     <img src="/images/brand/brand-2.png" alt="brand" />
        //                                 </div>
        //                             </div>
        //                             <div className="swiper-slide">
        //                                 <div className="brand-item">
        //                                     <img src="/images/brand/brand-3.png" alt="brand" />
        //                                 </div>
        //                             </div>
        //                             <div className="swiper-slide">
        //                                 <div className="brand-item">
        //                                     <img src="/images/brand/brand-4.png" alt="brand" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='brand-section ptb-120'>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2000
                    }}
                    spaceBetween={20}
                    // slidesPerView={4}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                    className='container'
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="brand-item">
                                <img src="/images/brand/brand-1.png" alt="brand" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="swiper-slide">
                            <div className="brand-item">
                                <img src="/images/brand/brand-1.png" alt="brand" />
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className="swiper-slide">
                            <div className="brand-item">
                                <img src="/images/brand/brand-1.png" alt="brand" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="brand-item">
                                <img src="/images/brand/brand-1.png" alt="brand" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="brand-item">
                                <img src="/images/brand/brand-1.png" alt="brand" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="brand-item">
                                <img src="/images/brand/brand-1.png" alt="brand" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default BrandSlider