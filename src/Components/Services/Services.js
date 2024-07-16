import React, { useEffect } from 'react';
import "../Services/Services.css"
import Header from '../Header/Header';
import Image1 from "../Image/Services.jpg"
import Image2 from "../Image/Milk.svg"
import Image3 from "../Image/Home.svg"
import Image4 from "../Image/Truck.svg"
import Image5 from "../Image/Leaf.svg"
import Image6 from "../Image/Storage.svg"
import Image7 from "../Image/Vegetables.svg"
import Image8 from "../Image/Dry-Fruites.png"
import Image9 from "../Image/Video Icon.png"
import Image10 from "../Image/Organic-only.png";
import Button from '../Buttons/Button';
import { GoArrowRight } from 'react-icons/go';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])
    return (
        <>
            <div className="Services-bg-image">
                <img src={Image1} alt="" />
            </div>
            <div className="service-information">
                <div className="container">
                    <div className="services-info">
                        <div className="services-title" data-aos="zoom-in" data-aos-duration="1000">
                            <h3 className='text-center'>What we Grow</h3>
                            <h1 className='text-center ser-info fw-bold'>Better Agriculture for Better Future</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right" data-aos-duration="1000">
                                <div className="ser-product text-lg-end">
                                    <img src={Image2} alt="" />
                                    <h4>Dairy Products</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className="ser-product text-lg-end mt-5">
                                    <img src={Image3} alt="" />
                                    <h4>Store Services</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className="ser-product text-lg-end mt-5">
                                    <img src={Image4} alt="" />
                                    <h4>Delivery Services</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dry-fruties" data-aos="zoom-in" data-aos-duration="1000">
                                    <img src={Image8} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-left" data-aos-duration="1000">
                                <div className="ser-product ">
                                    <img src={Image5} alt="" />
                                    <h4>Agricultural Services</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className="ser-product  mt-5">
                                    <img src={Image6} alt="" />
                                    <h4>Organic Products</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className="ser-product  mt-5">
                                    <img src={Image7} alt="" />
                                    <h4>Fresh Vegetables</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                            </div>
                        </div>
                        <div className="exp-btn d-flex justify-content-center">
                            <Link to={"/Services-single"}>
                                <Button

                                    class={"shop mt-5 fw-bold News-btn"}
                                    btn={" Explore More"}
                                    backgroundColor={"transparent"}
                                    icons={
                                        <GoArrowRight className="side-icon side ms-2 rounded-circle text-white" />
                                    }
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="organic-only position-relative">
                <div className="organic-main-image ">
                    <img src={Image10} alt="" />
                </div>
                <div className="orgainc-title text-center position-absolute">
                    <h3 className='mt-4'>Organic Only</h3>
                    <h1>Everyday Fresh & Clean</h1>
                    <p className=' mt-4 mb-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
                    <img src={Image9} alt="" />
                </div>
            </div>
        </>
    )
}

export default Services
