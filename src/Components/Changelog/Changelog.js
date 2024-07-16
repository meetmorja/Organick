import React, { useEffect } from 'react'
import "../Changelog/Changelog.css"
import Header from '../Header/Header'
import Image1 from "../Image/Changelog.png"
import Image2 from "../Image/Webflow.png"
import Sub from '../Subscibe/Sub'
import Footer from '../Footer/Footer'

const Changelog = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [])
  return (
    <>
      <div className="changelog">
        <img src={Image1} alt="" />
      </div>
      <div className="organic-webflow d-flex justify-content-center mb-5 mt-5">
        <div className="container">
          <div className="webflow shadow p-3 bg-body-tertiary rounded d-flex">
            <div className="web-image">
              <img src={Image2} alt="" />
            </div>
            <div className="web-info d-flex align-items-center rounded-4">
              <h1 className='ms-5'>V.1</h1>
              <p className='mb-0 ms-3'>Initial Organick Webflow Template Release</p>
            </div>
          </div>
        </div>
      </div>
      <Sub />
    </>
  )
}

export default Changelog
