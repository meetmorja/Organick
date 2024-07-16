import React, { useEffect, useContext } from "react";
import "./Shop.css";
import Image1 from "../Image/shop.png";
import Category from "../Category/Category";
import { shop_card } from "../Data/Data";
import Sub from "../Subscibe/Sub";
import { useNavigate } from "react-router-dom";
import { Contextex } from "../Context/Contex";

const Shop = () => {
  const { searchQuery } = useContext(Contextex);
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollTop();
  }, []);

  const handleNavigation = (item) => {
    localStorage.setItem("shop", JSON.stringify(item));
    navigate("/shopSingle"); 
  };

  const filteredProducts = shop_card.filter((product) =>
    product.CtgName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="shop-bg-image">
        <img src={Image1} alt="" />
      </div>
      <div className="categories">
        <div className="container">
          <div className="categories-title" data-aos="zoom-in">
            <h2 className="text-center">Categories</h2>
            <h1 className="text-center our mb-5">Our Products</h1>
          </div>
          <div className="row justify-content-center">
            {(searchQuery ? filteredProducts : shop_card).map((item, index) => (
              <div
                className="col-lg-3 col-md-6 mb-5 position-relative add-hover"
                onClick={() => handleNavigation(item)}
                key={index}
              >
                <Category product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sub />
    </>
  );
};

export default Shop;
