import React, { useContext, useEffect, useState } from "react";
import "../HomePage/Home.css";
import Image1 from "../Image/Image (1).png";
import Image2 from "../Image/Image (2).png";
import Image3 from "../Image/Photo (6).png";
import Image4 from "../Image/Icon.png";
import Image5 from "../Image/Icon (1).png";
import Image6 from "../Image/slider-photo.png";
import Image7 from "../Image/Star.png";
import { offer_card, pro_card } from "../Data/Data";
import Button from "../Buttons/Button";
import { GoArrowRight } from "react-icons/go";
import Category from "../Category/Category";
import Slider from "react-slick";
import { pro_details } from "../Data/Data";
import { Organic_foods } from "../Data/Data";
import { leaf } from "../Data/Data";
import { FaUser } from "react-icons/fa";
import Sub from "../Subscibe/Sub";
import { Link } from "react-router-dom";
import { Contextex } from "../Context/Contex";

const Home = () => {

  const { searchQuery } = useContext(Contextex);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [])
  const filteredProducts = pro_card?.filter((product) => {
    return product?.CtgName?.toLowerCase()?.includes(searchQuery?.toLowerCase());
  });
  console.log(filteredProducts, "==========");

  return (
    <>

      <div className="natural">
        <div className="bg-image position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="title" data-aos="zoom-in-up">
                  <h5>100% Natural Food</h5>
                  <h2>Choose the best healthier way of life</h2>
                  <div className="position-relative z-1">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-md-4 col-sm-12">
              <div className="offer-image-1 position-relative text-white" data-aos="flip-left">
                <img src={Image1} alt="" />
                <div className="position-absolute text">
                  <p className="mb-0 text-white">Natural!!</p>
                  <h2>Get Garden Fresh Fruits</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-md-4 col-sm-12">
              <div className="offer-image-2 position-relative" data-aos="flip-right">
                <img src={Image2} alt="" />
                <div className="position-absolute text-1">
                  <p className="mb-0">Offer!!</p>
                  <h2>Get 10% off on Vegetables</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="farmers shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className=" col-lg-6 col-md-8 col-sm-12 set">
              <div className="f-image">
                <img src={Image3} alt="Farmers" className="img-fluid" />
              </div>
            </div>
            <div className=" col-lg-6 col-md-8 col-sm-12 set">
              <div className="about-us">
                <h6>About Us</h6>
                <h5>We Believe in Working Accredited Farmers</h5>
                <p className="about-info">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="About-product pt-4">
                  <div className="about-1 d-flex">
                    <img
                      className="shadow-sm bg-body-tertiary rounded"
                      src={Image4}
                      alt=""
                    />
                    <div className="ms-lg-3 ms-sm-2">
                      <h3 className="food">Organic Foods Only</h3>
                      <p className="ms-md-2">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <div className="about-1 d-flex pt-3">
                    <img
                      className="shadow-sm bg-body-tertiary rounded"
                      src={Image5}
                      alt=""
                    />
                    <div className="ms-lg-3 ms-sm-2">
                      <h3 className="food">Quality Standards</h3>
                      <p className="ms-md-2 food">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <Link to="/About">
                    <Button
                      class={"shop mt-5 text-white border-0"}
                      btn={"Shop Now"}
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
      <div className="categories">
        <div className="container">
          <div className="categories-title" data-aos="zoom-in-down">
            <h2 className="text-center">Categories</h2>
            <h1 className="text-center our mb-5">Our Products</h1>
          </div>
          <div className="row justify-content-center">
            {(searchQuery ? filteredProducts : pro_card).map((product) => (
              <div className="col-lg-3 col-md-6 mb-5 position-relative add-hover" key={product.id}>
                <Category product={product} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/shop">
              <Button
                class={"shop mt-5 text-white border-0"}
                btn={"Load Now"}
                backgroundColor={"#274C5B"}
                icons={
                  <GoArrowRight className="side-icon ms-2 rounded-circle text-white" />
                }
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="testmonials">
        <div className="container">
          <div className="test-heading text-center" data-aos="zoom-in-down">
            <h2 className="test-title">TestMonials</h2>
            <h1>What Our Customer Saying?</h1>
          </div>
          <Slider {...settings}>
            <div className="Customer">
              <div className="slider-image d-flex justify-content-center mt-5">
                <img src={Image6} alt="" />
              </div>
              <div className="rating-image text-center mt-2 mb-3">
                <img src={Image7} alt="" className="m-auto" />
              </div>
              <div className="review">
                <p className="text-center">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </p>
              </div>
              <div className="customer-name text-center">
                <h2 className="mt-3 w-bold">Sara Taylor</h2>
                <p>consumer</p>
              </div>
            </div>
            <div className="Customer">
              <div className="slider-image d-flex justify-content-center mt-5">
                <img src={Image6} alt="" />
              </div>
              <div className="rating-image text-center mt-2 mb-3">
                <img src={Image7} alt="" />
              </div>
              <div className="review">
                <p className="text-center">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </p>
              </div>
              <div className="customer-name text-center">
                <h2 className="mt-3 w-bold">Sara Taylor</h2>
                <p>consumer</p>
              </div>
            </div>
          </Slider>
          <div className="customer-review">
            <div className="row">
              {pro_details.map((items) => (
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-5">
                  <div className="c-review text-center rounded-circle border border-5 border-success-subtle d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="fw-bold percentage fs-1 ">
                        {items.percentage}
                      </h2>
                      <p className="text-center">{items.cName}</p>
                    </div>
                  </div>
                </div>
              ))}
        
            </div>
          </div>
        </div>
      </div>
      <div class="offers-section">
        <div class="container">
          <div class="row pb-5">
            <div class="col-lg-6 col-md-6">
              <div class="d-flex justify-content-between">
                <div class="offers-title" data-aos="zoom-in-down">
                  <h3>offers</h3>
                  <h1 class="text-white fw-bold">We Offer Organic For You</h1>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="view-button text-center text-lg-end mt-4 mt-lg-0">
                <Button
                  class={"shop mt-5 fw-bold border-0 view"}
                  btn={"View All Product"}
                  backgroundColor={"#EFD372"}
                  icons={
                    <GoArrowRight className="side-icon side ms-2 rounded-circle text-white" />
                  }
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            {offer_card.map((item) => (
              <div className="col-lg-3 col-md-6 mb-5">
                <Category product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="eco-friendly overflow-hidden position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="ec-image"></div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="eco-info card shadow-sm p-3 mb-5 bg-body-tertiary rounded border-0 bg-white position-absolute rounded-4" data-aos="zoom-in-up">
              <div className="eco-title " style={{ width: "600px" }}>
                <h2>Eco-Friendly</h2>
                <h1 className="mb-5">Econis is a Friendly Organic Store</h1>

                <div className="eco-first mb-4">
                  <h4>Start with Our Company First</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div className="eco-Second mb-4">
                  <h4>Learn How to Grow Yourself</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div className="eco-Second">
                  <h4>Farming Strategies of Today</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foods">
        <div className="container">
          <div className="row">
            {Organic_foods.map((items) => (
              <div className="col-lg-4">
                <div className="f-image-1 position-relative mb-4" data-aos="zoom-out">
                  <img src={items.O_image} alt="" />
                  <div className="organic-btns position-absolute">
                    <button className="cookies">{items.O_name}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <div class="row pb-5">
            <div class="col-lg-6 col-md-6">
              <div class="d-flex justify-content-between">
                <div class="news-title" data-aos="zoom-in-up">
                  <h3 className="center">News</h3>
                  <h1 class="fw-bold center">
                    Discover weekly content about organic food, & more
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="view-button text-center text-lg-end mt-4 mt-lg-0">
                <Link to="/Blog">
                  <Button
                    class={"shop mt-5 fw-bold News-btn"}
                    btn={"More News"}
                    backgroundColor={"transparent"}
                    icons={
                      <GoArrowRight className="side-icon side ms-2 rounded-circle text-white" />
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          <Link to={"/Blog"}>
            <div className="row">
              {leaf.map((items) => (
                <div className="col-lg-6 col-md-8 col-sm-12">
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
                    <div className="leaf-card shadow p-3 mb-5 bg-body-tertiary rounded-5 position-absolute" data-aos="fade-up"
                      data-aos-duration="500">
                      <div className="space">
                        <div className="user d-flex align-items-center mb-4">
                          <FaUser className="text-warning" />
                          <p className="mb-0 ms-2">{items.leaf_name}</p>
                        </div>
                        <div className="leaf-heading">
                          <h4>{items.leaf_heading}</h4>
                          <p>{items.leaf_info}</p>
                          <Button
                            class={"shop fw-bold view read"}
                            btn={"Read News"}
                            backgroundColor={"transparent"}
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
          </Link>
        </div>
      </div>
      <Sub />
    </>
  );
};

export default Home;