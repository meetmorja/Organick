import React, { useEffect, useState } from 'react'
import "../Portfolio-single/Portfolio-single.css"
import Header from '../Header/Header'
import Image1 from "../Image/carrot-farming.png"
import Image2 from "../Image/Raspberry.png"
import Footer from '../Footer/Footer'
import Sub from '../Subscibe/Sub'

const Portfolio_single = () => {

  const [portfolio, setPortfolio] = useState({})

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("shop"));
    setPortfolio(data)

  }, [])
  return (
    <>
      <div className="Raspberry">
        <div className="Raspberry position-relative">
          <img src={portfolio.product_photo} alt="" />
        </div>
        <div className="Raspberry-info position-absolute">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="raspberry-title shadow-sm p-3 bg-body-white rounded-4">
                  <h2 className="mb-3">{portfolio. product_name}</h2>
                  <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Raspberry-date shadow-sm p-3  bg-body-white rounded-4">
                  <h6 className='mb-3 fw-bolder text-primary-emphasis'>Date: <span className='fw-bold text-black'>December 4, 2022</span></h6>
                  <h6 className='mb-3 fw-bolder text-primary-emphasis'>Client: <span className='fw-bold text-black'>Kevin Martin</span></h6>
                  <h6 className='mb-3 fw-bolder text-primary-emphasis'>Category: <span className='fw-bold text-black'>Agriculture , Eco</span></h6>
                  <h6 className='mb-3 fw-bolder text-primary-emphasis'>Date: <span className='fw-bold text-black'>Organic Products</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About-farm">
        <div className="container">
          <div className="farm-title">
            <h1 className="fw-bold mb-lg-5 mb-md-5 mb-sm-3">About The Farm:</h1>
            <p className='mb-4'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
            <div className="d-flex justify-content-center carrot-image">
              <img src={Image1} alt="" className='mt-4' />
            </div>
            <span className='d-flex justify-content-center mt-3'>The Organic Product</span>
          </div>
          <div className="how-to-farm">
            <div className="farm-title">
              <h1 className='mt-3'>How To Farm:</h1>
              <p className='mb-4'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
            </div>
          </div>
          <div className="Conculsion mt-5">
            <div className="farm-title">
              <h1 className='mt-3'>Conclusion:</h1>
              <p className='mb-4'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
            </div>
          </div>
        </div>
      </div>
      <Sub />

    </>
  )
}

export default Portfolio_single
