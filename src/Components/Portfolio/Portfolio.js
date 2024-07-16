import React, { useEffect, useState } from 'react'
import "../Portfolio/Portfolio.css";
import Image1 from "../Image/Portfolio.png"
import { vegetables_product } from '../Data/Data';
import Sub from '../Subscibe/Sub';
import { Link, useNavigate } from 'react-router-dom';



const Portfolio = () => {

    const Navigate = useNavigate()

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])

    const HeandleNavigatoion = (items) => {
        localStorage.setItem("shop", JSON.stringify(items))
        Navigate("/Portfolio_single")
    }

    return (
        <>
            <Link to={"/Portfolio_single"}>
                <div className="port-bg-image">
                    <img src={Image1} alt="" />
                </div>
                <div className="vegetable-product" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" >
                    <div className="container">
                        <div className="row">
                            {vegetables_product.map((items) => (
                                <div className="col-lg-4 col-md-6" onClick={() => HeandleNavigatoion(items)}>
                                    <div className="veg-pro mb-5">
                                        <img src={items.product_photo} alt="" />
                                        <h4 className='mt-3 text-black'>{items.product_name}</h4>
                                        <p>{items.product_catagory}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
            <Sub />
        </>
    )
}

export default Portfolio
