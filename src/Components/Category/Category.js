import React, { useEffect, useState } from "react";
import "../Category/Category.css";
import Photo from "../Image/Product-1.png";
import Photo1 from "../Image/Star.png";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

const Category = ({ product }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollTop();
  }, [])

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <>
      <div className="Category">
        <div className="card rounded-4 border-0 card-hover  ">
          <div className="">
            <div data-aos="fade-right">
              <p className="c-title p-2 rounded-4 mt-3 ms-3">
                {product?.Ctgtitle}
              </p>
            </div>
            <img src={product?.image} className="card-img-top fix" alt="" />
            <div className="card-body">
              <h5 className="card-title mb-3">{product?.CtgName}</h5>
              <div className="d-flex justify-content-between border-top align-items-center">
                <p className="mb-0">
                  <strike>{product?.Wprice}</strike>
                  <span className="ms-2">{product?.Rprice}</span>
                </p>
                <img src={product?.Rimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-c_icons position-absolute">
        <FaHeart
          className={`heart-icon ${isHeartClicked ? 'heart-icon-red' : ''}`}
          onClick={handleHeartClick}
        />
        <PiShoppingCartLight className="add-cart-icon" />
      </div>
    </>
  );
};

export default Category;
