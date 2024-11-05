import React from 'react'
import 'animate.css';

const Header2 = () => {
    return (
        <header class="header-section three">
            <div class="header">
                <div class="header-bottom-area">
                    <div class="container custom-container">
                        <div class="header-menu-content">
                            <nav class="navbar navbar-expand-xl p-0">
                                <a class="site-logo site-title" aria-label='logo' href="index.html"><img src="/images/logo-three.png" alt="site-logo" /></a>
                                <button class="navbar-toggler d-block d-xl-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="toggle-bar"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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
                                    <div class="header-right">
                                        <div class="header-action-area">
                                            <div class="header-action">
                                                <a href="contact" aria-label='Contact page' class="btn--base">GET STARTED</a>
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

export default Header2