import React, { useContext, useEffect } from 'react'
import "../Error/Error.css"
import Header from '../Header/Header'
import Sub from '../Subscibe/Sub'
import Footer from '../Footer/Footer'
import Button from '../Buttons/Button'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Contextex } from '../Context/Contex'

const Error = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])

    const cart = useContext(Contextex);

    return (
        <>

            <div className="error-bg-image position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="error-title position-absolute">
                                <h1>404</h1>
                                <h2 className='mt-5'>Page not found</h2>
                                <p>The page you are looking for doesn't exist or has been moved</p>
                                <div className="go-to">
                                    <Link to="/">
                                        <Button
                                            class={"shop mt-5 text-white border-0 homepage"}
                                            btn={"Go To Homepage"}
                                            backgroundColor={"#274C5B"}
                                            icons={
                                                <GoArrowRight className="side-icon ms-2 rounded-circle text-white" />
                                            }
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Error
