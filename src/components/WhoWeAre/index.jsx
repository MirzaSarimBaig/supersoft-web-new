import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WhoWeAre = () => {
    return (
        <section className="about-section ptb-120">
            <div className="about-element-one two">
                <img src="/images/element/element-39.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center mb-30-none">
                    <div className="col-xl-6 col-lg-6 mb-30">
                        <div className="about-content two">
                            <h3 className="title">Who We Are</h3>
                            <p className="para">Softim is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups <br /> with innovative solutions.</p>
                            <p>Softin is not an entity, it’s a family that represents togetherness for over two decades of a successful journey. For IndiaNICians, the definition of success is to transcend innovative ideas of people to reality with the help of our tech expertise, this is what we, as a Team, want to be remembered for!</p>
                            <div className="about-btn two">
                                <a href="contact" aria-label='Contact us' className="btn--base">Contact us</a>
                                <span>or Call <a href="tel:11026593268003" aria-label='Company number'>+110 2659 3268 003</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                        <div className="about-thumb two">
                            <img src="/images/element/element-68.png" alt="element" />
                            <div className="about-thumb-element-one">
                                <img src="/images/element/element-60.png" alt="element" />
                            </div>
                            <div className="about-thumb-element-two">
                                <img src="/images/element/element-60.png" alt="element" />
                            </div>
                            <div className="about-thumb-video">
                                <div className="circle">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                        <defs>
                                            <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                        </defs>
                                        <circle cx="150" cy="100" r="75" fill="none" />
                                        <g>
                                            <use xlinkHref="#circlePath" fill="none" />
                                            <text fill="#ffffff">
                                                <textPath xlinkHref="#circlePath">Softim it solution Softim it solution Softim it solution Softim it solution</textPath>
                                            </text>
                                        </g>
                                    </svg>
                                </div>
                                <div className="video-main">
                                    <a className="video-icon video" aria-label='Youtube video' data-rel="lightcase:myCollection" href="https://www.youtube.com/embed/LRhrNC-OC0Y">
                                        <i>
                                            <FontAwesomeIcon icon={faPlay} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre