import React, { useEffect } from 'react'
import "../Blog/Blog.css"
import Header from '../Header/Header'
import Image1 from "../Image/Blog-bg.png"
import { Letest_news } from '../Data/Data'
import { GoArrowRight } from 'react-icons/go'
import Button from '../Buttons/Button'
import { FaUser } from 'react-icons/fa'
import Footer from '../Footer/Footer'
import Sub from '../Subscibe/Sub'
import { Link, Navigate, useNavigate } from "react-router-dom";

const Blog = () => {

    const Navigate = useNavigate()


    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])

    const HeandleNavigatoion = (items) => {
        localStorage.setItem("shop", JSON.stringify(items))
        Navigate("/Blog-Single")
    }
    return (
        <>
            <div className="blog-bg-image">
                <img src={Image1} alt="" />
            </div>

            <Link to="/Blog-Single">
                <div className="blog-information">
                    <div className="container">
                        <div className="row">
                            {Letest_news.map((items) => (
                                <div className="col-lg-6 col-md-8 col-sm-12 leaf-page" onClick={() => HeandleNavigatoion(items)}>
                                    <div className="leaf position-relative">
                                        <img src={items.leaf_image} alt="" />
                                        <div className="date position-absolute  d-flex justify-content-center align-items-center">
                                            <p
                                                className="Nov mb-0 text-center"
                                                style={{ width: "40px" }}
                                            >
                                                25 Nov
                                            </p>
                                        </div>
                                        <div className="leaf-card shadow p-3 mb-5 bg-body-tertiary rounded-5 position-absolute">
                                            <div className="space">
                                                <div className="user d-flex align-items-center mb-4">
                                                    <FaUser className="text-warning" />
                                                    <p className="mb-0 ms-2 text-black">{items.leaf_name}</p>
                                                </div>
                                                <div className="leaf-heading">
                                                    <h4 className='text-black'>{items.leaf_heading}</h4>
                                                    <p className='text-black'>{items.leaf_info}</p>
                                                    <Button
                                                        class={"shop fw-bold view read"}
                                                        btn={"Read News"}
                                                        icons={
                                                            <GoArrowRight className="side-icon side ms-2 rounded-circle text-white" />
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div >
            </Link>
            <Sub />
        </>
    )
}

export default Blog
