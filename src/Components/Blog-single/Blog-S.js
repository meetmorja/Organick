import React, { useEffect, useState } from 'react'
import "../Blog-single/Blog_S.css"
import Header from '../Header/Header'
import { FaUser } from 'react-icons/fa'
import Sub from '../Subscibe/Sub'
import Image1 from "../Image/Research.png"

import Footer from '../Footer/Footer'

const Blog_S = () => {

    const [blog, setBlog] = useState({})

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("shop"));
        setBlog(data)

    }, [])
    return (
        <>
            <div className="research-bg-image">
                <img src={blog.leaf_image} alt="" />
            </div>
            <div className="research_more position-relative">
                <div className="container">
                    <div className="Raspberry-info position-absolute research-info">
                        <div className="container">
                            <div className="raspberry-title shadow-sm p-3 bg-body-white rounded-4">
                                <div className="d-flex align-items-center">
                                    <div className="posted-date">
                                        <h6 className='mb-0'>Posted On: <span>January 6, 2022</span></h6>
                                    </div>
                                    <div className="user-info ms-3">
                                        <FaUser className='ms-3 me-2' />By Rachi Card
                                    </div>
                                </div>
                                <h2 className="mb-3 benefits">{blog.leaf_heading}</h2>
                                <p>{blog.leaf_info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="About-farm vitamin">
                <div className="container">
                    <div className="farm-title mt-5">
                        <p className='mb-4'>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
                    </div>
                    <div className="how-to-farm">
                        <div className="farm-title">
                            <h1>Preferred Form of Vitamin D?</h1>
                            <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <ul>
                                <li className='mb-3'>Publishing packages and web pageLorem Ipsum as their default</li>
                                <li className='mb-3'> Content here, content here', making it look like readable</li>
                                <li className='mb-3'> Packages and web pageLorem Ipsum as their default</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rules mt-5">
                        <p className='mb-4'>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</p>
                    </div>
                    <div className="Conculsion mt-5">
                        <div className="farm-title">
                            <h1 className='mb-4'>Make perfect organic product with us</h1>
                            <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <ul className='listed p-0'>
                                <li className='mb-3'>1.Publishing packages and web pageLorem Ipsum as their default</li>
                                <li className='mb-3'>2.Content here, content here', making it look like readable</li>
                                <li className='mb-3'>3.Packages and web pageLorem Ipsum as their default</li>
                                <li className='mb-3'>4.more-or-less normal distribution of letters</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Sub />
        </>
    )
}

export default Blog_S
