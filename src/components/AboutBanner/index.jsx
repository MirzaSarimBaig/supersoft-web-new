import React from 'react'

const PageMainBanner = ({ title }) => {
    return (
        <section className="banner-section two inner">
            <div className="banner-element-four two">
                <img src="/images/element/element-5.png" alt="element" />
            </div>
            <div className="banner-element-five two">
                <img src="/images/element/element-7.png" alt="element" />
            </div>
            <div className="banner-element-nineteen two">
                <img src="/images/element/element-6.png" alt="element" />
            </div>
            <div className="banner-element-twenty-two two">
                <img src="/images/element/element-69.png" alt="element" />
            </div>
            <div className="banner-element-twenty-three two">
                <img src="/images/element/element-70.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center mb-30-none">
                    <div className="col-xl-12 mb-30">
                        <div className="banner-content two">
                            <div className="banner-content-header">
                                <h2 className="title">{title}</h2>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageMainBanner