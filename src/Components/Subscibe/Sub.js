import React, { useEffect } from "react";
import "../HomePage/Home.css";

import Button from "../Buttons/Button";

const Sub = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, [])
  return (
    <div className="subscribe">
      <div className="container">
        <div className="bg-sub">
          <div className="sub_p d-flex justify-content-between flex-wrap">
            <div className="sub-title text-white" data-aos="fade-right">
              <h1 className="">Subscribe to our Newsletter</h1>
            </div>
            <div className="mail-field" data-aos="fade-left">
              <input
                className="email rounded-4 border-1 mx-lg-3 mx-md-3"
                type="text"
                placeholder="Your Email Address"
              />
              <Button
                class={"shop text-white border-0 subscribe-btn"}
                btn={"Subscribe"}
                backgroundColor={"#274C5B"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
