import React, { useState } from 'react'

const PricingPlan = () => {
    const [paymentPlan, setPaymentPlan] = useState("yearly")
    return (
        <section className="plan-section two ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="section-header">
                            <h2 className="section-title mb-0">Our Digital Pricing Plan</h2>
                        </div>
                    </div>
                </div>
                <div className="plan-tab">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className={`nav-link ${paymentPlan == "monthly" ? "active" : ""}`} onClick={() => setPaymentPlan("monthly")} id="monthly-tab" data-toggle="tab" data-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true" aria-label='Monthly'>Monthly</button>
                            <button className={`nav-link ${paymentPlan == "yearly" ? "active" : ""}`} onClick={() => setPaymentPlan("yearly")} id="yearly-tab" data-toggle="tab" data-target="#yearly" type="button" role="tab" aria-controls="yearly" aria-selected="false" aria-label='Yearly'>Yearly</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className={`tab-pane fade ${paymentPlan == "monthly" ? "show active" : ""} `} id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            <div className="row justify-content-center mb-30-none">
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                                    <div className="plan-item">
                                        <div className="plan-header">
                                            <h3 className="title">Standard Plan</h3>
                                        </div>
                                        <div className="plan-body">
                                            <div className="plan-price-area">
                                                <h2 className="price-title">$39<sub>Monthly</sub></h2>
                                            </div>
                                            <ul className="plan-list">
                                                <li>Up to 100 keyphrases optimized</li>
                                                <li>Custom dashboards: 4</li>
                                                <li>Content, and link monitoring</li>
                                                <li>Digital marketing expert</li>
                                                <li>Content marketing assets</li>
                                            </ul>
                                        </div>
                                        <div className="plan-footer">
                                            <div className="plan-btn">
                                                <a href="plan.html" aria-label='Choose plan' className="btn--base active w-100">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                                    <div className="plan-item">
                                        <div className="plan-header">
                                            <h3 className="title">Ultra Plan</h3>
                                            <div className="plan-badge-area">
                                                <span className="plan-badge">Most Popular</span>
                                            </div>
                                        </div>
                                        <div className="plan-body">
                                            <div className="plan-price-area">
                                                <h2 className="price-title">$69<sub>Monthly</sub></h2>
                                            </div>
                                            <ul className="plan-list">
                                                <li>Up to 100 keyphrases optimized</li>
                                                <li>Custom dashboards: 4</li>
                                                <li>Content, and link monitoring</li>
                                                <li>Digital marketing expert</li>
                                                <li>Content marketing assets</li>
                                            </ul>
                                        </div>
                                        <div className="plan-footer">
                                            <div className="plan-btn">
                                                <a href="plan.html" aria-label='Choose plan' className="btn--base active w-100">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                                    <div className="plan-item">
                                        <div className="plan-header">
                                            <h3 className="title">Premium Plan</h3>
                                        </div>
                                        <div className="plan-body">
                                            <div className="plan-price-area">
                                                <h2 className="price-title">$49<sub>Monthly</sub></h2>
                                            </div>
                                            <ul className="plan-list">
                                                <li>Up to 100 keyphrases optimized</li>
                                                <li>Custom dashboards: 4</li>
                                                <li>Content, and link monitoring</li>
                                                <li>Digital marketing expert</li>
                                                <li>Content marketing assets</li>
                                            </ul>
                                        </div>
                                        <div className="plan-footer">
                                            <div className="plan-btn">
                                                <a href="plan.html" aria-label='Choose plan' className="btn--base active w-100">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${paymentPlan == "yearly" ? "show active" : ""} `} id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                            <div className="row justify-content-center mb-30-none">
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                                    <div className="plan-item">
                                        <div className="plan-header">
                                            <h3 className="title">Standard Plan</h3>
                                        </div>
                                        <div className="plan-body">
                                            <div className="plan-price-area">
                                                <h2 className="price-title">$79<sub>Yearly</sub></h2>
                                            </div>
                                            <ul className="plan-list">
                                                <li>Up to 100 keyphrases optimized</li>
                                                <li>Custom dashboards: 4</li>
                                                <li>Content, and link monitoring</li>
                                                <li>Digital marketing expert</li>
                                                <li>Content marketing assets</li>
                                            </ul>
                                        </div>
                                        <div className="plan-footer">
                                            <div className="plan-btn">
                                                <a href="plan.html" aria-label='Choose plan' className="btn--base active w-100">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                                    <div className="plan-item">
                                        <div className="plan-header">
                                            <h3 className="title">Ultra Plan</h3>
                                            <div className="plan-badge-area">
                                                <span className="plan-badge">Most Popular</span>
                                            </div>
                                        </div>
                                        <div className="plan-body">
                                            <div className="plan-price-area">
                                                <h2 className="price-title">$99<sub>Yearly</sub></h2>
                                            </div>
                                            <ul className="plan-list">
                                                <li>Up to 100 keyphrases optimized</li>
                                                <li>Custom dashboards: 4</li>
                                                <li>Content, and link monitoring</li>
                                                <li>Digital marketing expert</li>
                                                <li>Content marketing assets</li>
                                            </ul>
                                        </div>
                                        <div className="plan-footer">
                                            <div className="plan-btn">
                                                <a href="plan.html" aria-label='Choose plan' className="btn--base active w-100">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                                    <div className="plan-item">
                                        <div className="plan-header">
                                            <h3 className="title">Premium Plan</h3>
                                        </div>
                                        <div className="plan-body">
                                            <div className="plan-price-area">
                                                <h2 className="price-title">$59<sub>Yearly</sub></h2>
                                            </div>
                                            <ul className="plan-list">
                                                <li>Up to 100 keyphrases optimized</li>
                                                <li>Custom dashboards: 4</li>
                                                <li>Content, and link monitoring</li>
                                                <li>Digital marketing expert</li>
                                                <li>Content marketing assets</li>
                                            </ul>
                                        </div>
                                        <div className="plan-footer">
                                            <div className="plan-btn">
                                                <a href="plan.html" aria-label='Choose plan' className="btn--base active w-100">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingPlan