import React, { useEffect, useState } from 'react'

const Header = ({ bgColor, pageName }) => {
    const [openHeaderMenu, setOpenHeaderMenu] = useState(false)

    // useEffect(() => {
    //     if (pageName == "about") {
    //         setOpenHeaderMenu(true)
    //     }
    // }, [])
    return (
        <header
            className="header-section"
            // style={{ backgroundColor: pageName === "about" ? bgColor : "" }}>
            style={{ backgroundColor: bgColor }}>
            <div className="header">
                <div className={`header-bottom-area ${openHeaderMenu ? "open" : ""}`}>
                    <div className="container custom-container">
                        <div className="header-menu-content">
                            <nav className="navbar navbar-expand-xl p-0">
                                <a className="site-logo site-title" href="index.html" aria-label='logo'><img src="/images/logo.png" alt="site-logo" /></a>
                                <button className="navbar-toggler d-block d-xl-none ml-auto"
                                    onClick={() => setOpenHeaderMenu(!openHeaderMenu)}
                                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggle-bar"></span>
                                </button>
                                <div className={`collapse navbar-collapse justify-content-end  ${openHeaderMenu ? "show" : ""}`} id="navbarSupportedContent">
                                    <div className="header-right">
                                        <div className="search-bar">
                                            <form className="header-search-form">
                                                <input type="search" name="keyword" id="header_search" placeholder="Search..." />
                                                <button aria-label='Search button' className="header-search-btn"><i className="las la-search"></i></button>
                                            </form>
                                        </div>
                                        <div className="header-links-area">
                                            <ul className="header-links">
                                                <li>
                                                    <a href="mailto:" aria-label='Company mail'>
                                                        <div className="links-thumb">
                                                            <img src="/images/icon/icon-1.png" alt="icon" />
                                                        </div>
                                                        <span>info@softim.com</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tel:+11256326501" aria-label='Company number'>
                                                        <div className="links-thumb">
                                                            <img src="/images/icon/icon-2.png" alt="icon" />
                                                        </div>
                                                        <span>+11 256 3265 01</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <button aria-label='Menu toggler' className="menu-toggler ml-auto" onClick={() => setOpenHeaderMenu(!openHeaderMenu)}>
                                            <span className="toggle-bar"></span>
                                        </button>
                                        <div className="menu-toggler-wrapper">
                                            <ul className="navbar-nav main-menu">
                                                <li className="menu_has_children">
                                                    <a href="/" aria-label='Home page'>Home </a>
                                                </li>
                                                <li><a href="about" aria-label='About page'>About</a></li>
                                                <li className="menu_has_children">
                                                    <a href="#0">Services <i className="las la-angle-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="service" aria-label='Service page'>Service</a></li>
                                                        <li><a href="serviceDetails" aria-label='service details page'>Service Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu_has_children">
                                                    <a href="#0">Project <i className="las la-angle-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="project" aria-label='Project page'>Project</a></li>
                                                        <li><a href="projectDetails" aria-label='project details page'>Project Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu_has_children">
                                                    <a href="#0">Team / FAQ <i className="las la-angle-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="team" aria-label='Team page'>Team</a></li>
                                                        <li><a href="faq" aria-label='FAQ Page'>FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu_has_children">
                                                    <a href="#0">Blog <i className="las la-angle-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog" aria-label='Blog page'>Blog</a></li>
                                                        <li><a href="blogDetails" aria-label='Blog details page'>Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact" aria-label='Contact page'>Contact</a></li>
                                            </ul>
                                        </div>
                                        <div className="header-action-area">
                                            <div className="header-action">
                                                <a href="contact" aria-label='Contact Page' className="btn--base">GET STARTED</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header