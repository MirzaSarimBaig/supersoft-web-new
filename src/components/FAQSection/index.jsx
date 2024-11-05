import React, { useState } from 'react'

const FAQSection = () => {
    const [faqIndex, setFaqIndex] = useState(0)
    const faqs = [
        { question: "How long is the road test appointment?", answer: "Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training." },
        { question: "This is an accordion for FAQ Module", answer: "Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training." },
        { question: "I'm 16 years old, can I get my Driver License in NYC?", answer: "Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training." },
        { question: "How do I obtain a New York CDL?", answer: "Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training." },
        { question: "What is the process for getting my class D/E License?", answer: "Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training." }
    ];
    return (
        <section className="faq-section ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-12">
                        <div className="faq-wrapper">
                            {/* <div className="faq-item active open">
                                <h3 className="faq-title"><span className="title">How long is the road test appointment?</span><span className="right-icon"></span></h3>
                                <div className="faq-content">
                                    <p>Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training. Driving is a skill many of us desire but do not possess. The good news here is that anyone who wants to learn driving can do so with the right training.</p>
                                    <div className="faq-inner-thumb-area">
                                        <div className="faq-inner-thumb">
                                            <img src="/images/faq.png" alt="faq" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {faqs.map((faq, index) => (
                                <div className={`faq-item ${faqIndex == index ? "active open" : ""}`} key={index}
                                    onClick={() => setFaqIndex(index)}
                                >
                                    <h3 className="faq-title"><span className="title">{faq.question}</span><span className="right-icon"></span></h3>
                                    <div className="faq-content">
                                        <p>{faq.answer}</p>
                                        <div className="faq-inner-thumb-area">
                                            <div className="faq-inner-thumb">
                                                <img src="/images/faq.png" alt="faq" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FAQSection