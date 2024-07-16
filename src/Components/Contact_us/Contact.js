import React, { useEffect } from 'react'
import "../Contact_us/Contact.css"
import Header from '../Header/Header'
import Photo1 from "../Image/contact-bg.png"
import Photo2 from "../Image/banana.png"
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { SiPhotopea } from 'react-icons/si'
import Button from '../Buttons/Button'
import Footer from '../Footer/Footer'
import Sub from '../Subscibe/Sub'

const Contact = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])
    return (
        <>
    
            <div className="contact-bg-image">
                <img src={Photo1} alt="" />
            </div>
            <div className="together-work">
                <div className="container">
                    <div className="to-work">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banana-image mb-5" data-aos="fade-right">
                                    <img src={Photo2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left">
                                <div className="explain-work">
                                    <h1 className='fw-bold mb-4'>We'd love to talk about how we can work together.</h1>
                                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                </div>
                                <div className="how-to-contact">
                                    <div className="two-contact d-md-flex mt-4">
                                        <div className="contact-from-Email shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-items-center">
                                            <div className="E-mail icon d-flex justify-content-center align-items-center">
                                                <CiMail className='fs-1 text-warning' />
                                            </div>
                                            <div className="E-mail-id ms-4">
                                                <h5 className='mb-0'>Messege</h5>
                                                <p className='mb-0'>support@organic.com</p>
                                            </div>
                                        </div>
                                        <div className="contact-from-Number shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-items-center ms-md-3">
                                            <div className="M-Number icon d-flex justify-content-center align-items-center">
                                                <FaPhoneAlt className='fs-1 text-warning' />
                                            </div>
                                            <div className="E-mail-id ms-4">
                                                <h5 className='mb-0'>Contact Us</h5>
                                                <p className='mb-0'>+01 123 456 789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="social-icon for-contact mt-lg-5 mt-md-2 d-flex align-items-center justify-content-center">
                                    <FaInstagram class="mx-3 all-icons" />
                                    <FaFacebook class="mx-3 all-icons" />
                                    <FaTwitter class="mx-3 all-icons" />
                                    <SiPhotopea class="mx-3 all-icons" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact-leaf position-relative">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="our-farms position-absolute" data-aos="flip-right">
                                <div className="our-farms-title">
                                    <h3>Location</h3>
                                    <h1 className='fw-bold'>Our Farms</h1>
                                    <p className='mt-4'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
                                </div>
                                <div className="location-usa d-flex">
                                    <div className="lo-icon">
                                        <CiLocationOn className='fs-1 text-success' />
                                    </div>
                                    <div className="lo-name ms-2">
                                        <h6>New York,USA:</h6>
                                        <p>299 Park Avenue New York,
                                            New York 10171
                                        </p>
                                    </div>
                                </div>
                                <div className="location-usa d-flex">
                                    <div className="lo-icon">
                                        <CiLocationOn className='fs-1 text-success' />
                                    </div>
                                    <div className="lo-name ms-2">
                                        <h6>New York,USA:</h6>
                                        <p>299 Park Avenue New York,
                                            New York 10171
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-form">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-md-5">
                            <div className="F-name-mail">
                                <h3 className='mb-4'>Full Name*</h3>
                                <input className='y-add' type="text" placeholder='Your Email Address' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="F-name-mail">
                                <h3 className='mb-4'>Your Email*</h3>
                                <input className='y-add' type="text" placeholder='Example@Gmail.com' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-md-5">
                            <div className="F-name-mail">
                                <h3 className='mb-4'>Company*</h3>
                                <input className='y-add' type="text" placeholder='Your Company Name here' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="F-name-mail">
                                <h3 className='mb-4'>Subject*</h3>
                                <input className='y-add' type="text" placeholder='How Can We Help' />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="F-name-mail">
                                <h3 className='mb-4'>Message*</h3>
                                <textarea className='Message-add' placeholder='How can I Help You!'></textarea>
                            </div>
                        </div>
                    </div>
                    <Button
                        class={"shop mt-5 text-white border-0"}
                        btn={"Send Message"}
                        backgroundColor={"#274C5B"}
                    />
                </div>
            </div>
            <Sub />
        </>
    )
}

export default Contact
