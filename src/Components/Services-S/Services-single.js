import React, { useEffect } from 'react'
import "../Services-S/Services-single.css"
import Header from '../Header/Header'
import Image1 from "../Image/Services-Single.png"
import Image2 from "../Image/Organic-Service_store.png"
import Image3 from "../Image/Why Organic.png"
import Image4 from "../Image/Speciality Produce.jpg"
import Sub from '../Subscibe/Sub'
import Footer from '../Footer/Footer'

function Single_services() {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])
    return (
        <>
            <div className="ser-single-bg-image">
                <img src={Image1} alt="" />
            </div>
            <div className="service-store">
                <div className="container">
                    <div className="service-store-photo">
                        <img src={Image2} alt="" />
                    </div>
                    <div className="store-info">
                        <div className="store-all-information">
                            <div className="store-title">
                                <h1 className='mb-5' data-aos="zoom-in-up">Organic Store Services</h1>
                                <p className='mb-4'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <p className='mb-5'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about-organic-store" data-aos="fade-right" data-aos-duration="1500">
                                        <img src={Image3} alt="" className='mt-5' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="why-organic">
                                        <div className="for-orgainic" data-aos="fade-left" data-aos-duration="1000">
                                            <h3>Why Organic</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="why-organic more-space">
                                        <div className="for-orgainic" data-aos="fade-right" data-aos-duration="1000">
                                            <h3>Speciality Produce</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="about-organic-store store-image-2" data-aos="fade-left" data-aos-duration="1500">
                                        <img src={Image4} alt="" className='mt-3 rounded-4' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="farm">
                            <div className="farm-title">
                                <h1 className='mb-4'>We farm your land</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                        <div className="support-btn mt-5 d-flex" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <div className='sup-btn-1 position-relative'>
                                <p className='d-flex justify-content-center align-items-center position-absolute'>01</p>
                                <button className='border-0'>Best quality support</button>
                            </div>
                            <div className="sup-btn-2 position-relative">
                                <p className='d-flex justify-content-center align-items-center position-absolute'>02</p>
                                <button className='ms-3 border-0'>Money back guarantee</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sub />
        </>
    )
}

export default Single_services
