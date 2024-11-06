import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const AboutAgency = () => {
    // Separate state variables for each statistic
    const [yearsOfOperation, setYearsOfOperation] = useState(0);
    const [projectsDelivered, setProjectsDelivered] = useState(0);
    const [teamSpecialists, setTeamSpecialists] = useState(0);
    const [aroundTheWorld, setAroundTheWorld] = useState(0);

    useEffect(() => {
        // Trigger animations with a delay for each statistic
        const timeout1 = setTimeout(() => setYearsOfOperation(12), 1000);
        const timeout2 = setTimeout(() => setProjectsDelivered(256), 1000);
        const timeout3 = setTimeout(() => setTeamSpecialists(65), 1000);
        const timeout4 = setTimeout(() => setAroundTheWorld(25), 1000);

        // Cleanup timeouts
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
        };
    }, []);

    return (
        <section className="agency-section ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="agency-content text-center">
                            <div className="agency-logo-text">
                                <span>AGENCY</span>
                            </div>
                            <h2 className="title">Softim is a digital agency that offers a wide scale of
                                creative services, including brand development, online marketing, and more.
                            </h2>
                        </div>
                        <div className="agency-statistics-area">
                            <div className="row justify-content-center mb-30-none">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                    <div className="statistics-item">
                                        <div className="statistics-content">
                                            <div className="odo-area">
                                                <h3 className="odo-title">
                                                    <Odometer value={yearsOfOperation} format="d" duration={3000} />
                                                </h3>
                                                <h3 className="title">+</h3>
                                            </div>
                                            <p>Years of operation</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                    <div className="statistics-item">
                                        <div className="statistics-content">
                                            <div className="odo-area">
                                                <h3 className="odo-title">
                                                    <Odometer value={projectsDelivered} format="d" duration={3000} />
                                                </h3>
                                                <h3 className="title">+</h3>
                                            </div>
                                            <p>Projects delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                    <div className="statistics-item">
                                        <div className="statistics-content">
                                            <div className="odo-area">
                                                <h3 className="odo-title">
                                                    <Odometer value={teamSpecialists} format="d" duration={3000} />
                                                </h3>
                                                <h3 className="title">+</h3>
                                            </div>
                                            <p>Team Specialists</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                    <div className="statistics-item">
                                        <div className="statistics-content">
                                            <div className="odo-area">
                                                <h3 className="odo-title">
                                                    <Odometer value={aroundTheWorld} format="d" duration={3000} />
                                                </h3>
                                                <h3 className="title">+</h3>
                                            </div>
                                            <p>Around The World</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAgency;
