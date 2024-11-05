import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CallToAction = () => {
    return (
        <section className="subscribe-section ptb-120">
            <div className="subscribe-element-one">
                <img src="/images/element/element-51.png" alt="element" />
            </div>
            <div className="container">
                <div className="subscribe-area">
                    <div className="subscribe-element-two">
                        <img src="/images/element/element-76.png" alt="element" />
                    </div>
                    <div className="subscribe-element-three">
                        <img src="/images/element/element-50.png" alt="element" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-7 offset-xl-5">
                            <div className="subscribe-content">
                                <h2 className="title">Get Newsletter From Softim</h2>
                                <p>Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>
                                <form className="subscribe-form">
                                    <label className="subscribe-icon"><img src="/images/icon/icon-7.png" alt="icon" /></label>
                                    <input type="text" className="form--control" placeholder="Email Address" />
                                    <button type="submit" className="btn--base" aria-label='Submit button'>SUBSCRIBE <i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction