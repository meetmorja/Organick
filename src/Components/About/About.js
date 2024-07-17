import React, { useEffect } from "react";
import Header from "../Header/Header";
import "../About/About.css";
import Image2 from "../Image/About-Photo-2.png";
import Image3 from "../Image/tractor.svg";
import Image4 from "../Image/Ship.svg";
import Image5 from "../Image/Choss.png";
import Button from "../Buttons/Button";
import { GoArrowRight } from "react-icons/go";
import { about_offers, expert_details, policy_card } from "../Data/Data";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Sub from "../Subscibe/Sub";

const About = () => {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [])
  return (
    <>
      <div className="about-bg-image d-flex justify-content-center align-items-center">
        <h1 className="fw-bold">About Us</h1>
      </div>
      <div className="about-organic" data-aos="zoom-in" data-aos-duration="1000">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="about-org-photo">
                <img src={Image2} alt="Farmers" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-lg-6 all-about-org">
              <div className="about-title">
                <h3>About Us</h3>
                <h1>We do Creative Things for Success</h1>
                <p className="info-org mb-lg-3 mb-sm-5">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <p className="info-org">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="d-lg-flex d-md-flex mt-md-5 center">
                <div className="vehicals d-lg-flex d-md-flex">
                  <img src={Image3} alt="" />
                  <h4 className="agri ms-lg-3 ms-md-3">
                    Modern Agriculture Equipment
                  </h4>
                </div>
                <div className="vehicals d-lg-flex d-md-flex  ms-md-3">
                  <img src={Image4} alt="" />
                  <h4 className="agri ms-lg-3 ms-md-3">
                    No growth hormones are used
                  </h4>
                </div>
              </div>
              <div className="d-md-flex justify-md-content-center sec-btn mb-md-5">
                <Button
                  class={"mt-5 ex-btn"}
                  btn={"Explore Now"}
                  backgroundColor={"#274C5B"}
                  icons={
                    <GoArrowRight className="side-icon ms-2 rounded-circle text-white" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Our-speciality">
        <div className="container">
          <div className="row o-place flow" >
            <div className="col-lg-6 col-12" data-aos="flip-up">
              <div className="spe-title">
                <h3 className="choose">Why Choose us?</h3>
                <h1 className="choose">
                  We do not buy from the open market & traders.
                </h1>
                <p className="mt-4 mb-5 choose">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard the 1500s,
                  when an unknown
                </p>
              </div>
              <div className="main-natural mb-3">
                <div className="natural-btn">
                  <p className="choose">100% Natural Product</p>
                </div>
                <p className="ms-5 mt-3 natural-info choose">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
              <div className="main-natural mb-3">
                <div className="natural-btn ">
                  <p className="choose">100% Natural Product</p>
                </div>
                <p className="ms-5 mt-3 natural-info choose">
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="natural-image" data-aos="flip-down">
                <img src={Image5} alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" >
              {policy_card.map((items) => (
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="security" data-aos="zoom-in-down">
                    <div className="secured-cards">
                      <div className="policy-card">
                        <img
                          src={items.p_image}
                          alt=""
                          className="policy-icon"
                        />
                        <h5 className="mt-4 mb-4 text-center">
                          {items.p_title}
                        </h5>
                        <p className="text-center">{items.p_info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <div className="team-heading" data-aos="zoom-in">
            <h3 className="text-center">Team</h3>
            <h1 className="text-center mb-4">Our Organic Experts</h1>
            <p className="text-center team-info">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="row">
            {expert_details.map((items) => (
              <div className="col-lg-4 col-md-4 col-12">
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
      <div className="about-offer">
        <div className="container">
          <div className="about-offer-title" data-aos="zoom-in">
            <h3 className="text-center">About-Us</h3>
            <h1 className="text-center text-white">What We Offer for You</h1>
          </div>
          <div className="row">
            {about_offers.map((items) => (
              <div className="col-lg-3 col-md-6 col-12">
                <div className="about-offer-image mt-5">
                  <div className="spicy">
                    <img src={items.a_image} alt="" className="rounded-4" />
                    <h4 className="text-white text-center mt-3">
                      {items.a_name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sub />
    </>
  );
};

export default About;
