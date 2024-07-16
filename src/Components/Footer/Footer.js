import React, { useEffect } from "react";
import "../Footer/Footer.css";
import logo from "../Image/Logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiPhotopea } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [])
  return (
    <>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="footer-1 list-type">
                <h2 class="text-lg-end start me-5 place">Contact Us</h2>
                <ul class="first-contact mx-5 ps-0">
                  <div class="mt-5 mb-5 con-menu">
                    <li class="fw-bold text-end start">Email</li>
                    <li class="text-end start">needhelp@Organic.com</li>
                  </div>
                  <div class="mt-5 mb-5 con-menu">
                    <li class="fw-bold text-end start">Phone</li>
                    <li class="text-end start">666 888 888</li>
                  </div>
                  <div class="mt-5 mb-5 con-menu">
                    <li class="fw-bold text-end start">Address</li>
                    <li class="text-end start">88 road,broklyn street,USA</li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-12  footer-4">
              <div class="logo-name d-flex align-items-center justify-content-center">
                <img src={logo} alt="" class="logo-image" />
                <Link class="navbar-brand ms-2 fs-2 heading fw-bold" to="/">
                  Organick
                </Link>
              </div>
              <div class="footer-info">
                <p class="text-center mt-4 mb-4">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing
                </p>
              </div>
              <div class="social-icon mt-5 d-flex align-items-center justify-content-center">
                <FaInstagram class="mx-3 all-icons" />
                <FaFacebook class="mx-3 all-icons" />
                <FaTwitter class="mx-3 all-icons" />
                <SiPhotopea class="mx-3 all-icons" />
              </div>
            </div>
            <div class="col-md-4 col-12 footer-3">
              <div class="footer-2 list-type">
                <h2 class="mb-5 pages">Utility Pages</h2>
                <ul class="first-contact ps-0">
                  <li class="mb-3">Style Guide</li>
                  <Link to="/Error">
                    <li class="mb-3 text-black">404 Not Found</li>
                  </Link>
                  <Link to="/Password">
                    <li class="mb-3 text-black">Password Protected</li>
                  </Link>
                  <Link to="/Licenses">
                    <li class="mb-3 text-black">Licences</li>
                  </Link>
                  <Link to="/Changelog">
                    <li class="mb-3 text-black">Changelog</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="copyright border-top">
        <div className="container">
          <p className="text-center mt-3">Copyright © <span className="fw-bold">Organick</span> | Designed by <span className="fw-bold">VictorFlow</span> Templates - Powered by <span className="fw-bold">Webflow</span></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
