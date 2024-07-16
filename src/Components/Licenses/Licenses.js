import React, { useEffect } from 'react'
import "../Licenses/Licenses.css"
import Header from '../Header/Header'
import Sub from '../Subscibe/Sub'
import Footer from '../Footer/Footer'

const Licenses = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        scrollTop();
    }, [])
    return (
        <>

            <div className="Licenses-bg-image d-flex justify-content-center align-items-center">
                <h1 className='fw-bold'>Licenses</h1>
            </div>

            <div className="Licenses-info">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-4">
                            <div className="icon-graphics">
                                <h1>Icon & Graphics</h1>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <p>Icons and Graphics are manually designed by the <span className='text-success fw-bolder'>VictorFlow</span> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.
                            </p>
                            <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-4">
                            <div className="icon-graphics">
                                <h1>Photography</h1>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="Photography">
                                <p>All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.
                                </p>
                                <div className="Unsplash mb-4">
                                    <h2>Unsplash</h2>
                                    <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                                </div>
                                <div className="pixcel">
                                    <h2>Pixcel</h2>
                                    <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="fonts">
                                <h1>Font</h1>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <p className='mb-0'>Organick template uses free licensed Google Fonts. Please check Roboto, Yellowtail
                                and Open Sans.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Sub />
        </>
    )
}

export default Licenses
