import React, { useEffect } from 'react'
import "../Password/Password.css"
import Header from '../Header/Header'
import Image1 from "../Image/password.png"
import Image2 from "../Image/Protected.jpg"
import Button from '../Buttons/Button'
import { GoArrowRight } from 'react-icons/go'
import Sub from '../Subscibe/Sub'
import Footer from '../Footer/Footer'

const Password = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])
    return (
        <>
            <div className="password-bg-image">
                <img src={Image1} alt="" />
            </div>
            <div className="protected-password d-flex justify-content-center">
                <div className="container">
                    <div className="password-p shadow p-3 mb-5 bg-body-tertiary rounded d-flex">
                        <div className="protected-image">
                            <img src={Image2} alt="" />
                        </div>
                        <div className="password-field ms-3">
                            <h3 className='mt-2'>Password</h3>
                            <input className='filed-set mt-4' type="text" name="" id="" placeholder='Enter Your Password' />
                            <Button
                                class={"shop mt-5 text-white border-0"}
                                btn={"Send Now"}
                                backgroundColor={"#274C5B"}
                                icons={
                                    <GoArrowRight className="side-icon side ms-2 rounded-circle text-white" />
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Sub />
        </>
    )
}

export default Password
