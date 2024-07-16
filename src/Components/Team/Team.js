import React, { useEffect } from 'react'
import "../Team/Team.css"
import Header from '../Header/Header'
import Image1 from "../Image/Team-bg.png"
import { expert_team_details } from '../Data/Data'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Sub from '../Subscibe/Sub'
import Footer from '../Footer/Footer'

const Team = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])
    return (
        <>
            <div className="team-banner">
                <img src={Image1} alt="" />
            </div>
            <div className="team-information">
                <div className="container">
                    <div className="team-title" data-aos="zoom-in">
                        <h3 className='text-center'>Team</h3>
                        <h1 className='text-center fw-bold'>Our Organic Experts</h1>
                        <p className='text-center'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="row expert-space">
                        {expert_team_details.map((items) => (
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="expert mt-5">
                                    <div className="expert-image">
                                        <img src={items.expert_image} alt="" />
                                        <div className="main-expert">
                                            <div className="expert-name">
                                                <h3>{items.expert_name}</h3>
                                            </div>
                                            <div className="post d-flex justify-content-between">
                                                <h4>Farmer</h4>
                                                <div className="s-icon">
                                                    <FaInstagram className="mx-2" />
                                                    <FaFacebook className="mx-2" />
                                                    <FaTwitter className="mx-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Sub />
        </>
    )
}

export default Team
