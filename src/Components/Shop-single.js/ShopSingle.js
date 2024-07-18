import React, { useContext, useEffect, useState } from 'react'
import "../Shop-single.js/ShopSingle.css";
import Image1 from "../Image/ShopSingle.png";
import Image3 from "../Image/Star.png";
import Button from '../Buttons/Button';
import { GoArrowRight } from 'react-icons/go';
import { shop_single_card } from '../Data/Data';
import Category from '../Category/Category';
import Sub from '../Subscibe/Sub';
import { Link, useParams } from 'react-router-dom';
import { Contextex } from '../Context/Contex';

const ShopSingle = () => {

  const cartContext = useContext(Contextex);

  const { cart, setCart } = cartContext;
  const [shop, setShop] = useState({})
  const [store, setStore] = useState([])
  const [quantity, setQuantity] = useState(1);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    let shop = JSON.parse(localStorage.getItem("shop"));
    setShop(shop);
    scrollTop();
  }, [])


  let {id} = useParams()


  const handleClick = () => {
    const cartItem = {
      id: shop.id,
      Ctgtitle: shop.Ctgtitle,
      CtgName: shop.CtgName,
      Wprice: shop.Wprice,
      Description: shop.Description,
      Rprice: shop.Rprice,
      quantity: quantity,
      image: shop.image,
    };

    let updatedCart = JSON.parse(localStorage.getItem("newCart")) || [];
    updatedCart.push(cartItem);
    localStorage.setItem("newCart", JSON.stringify(updatedCart));
    setCart(updatedCart.length);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };
  return (
    <>
      <div className="shop_single_bg_image">
        <img src={Image1} alt="" />
      </div>
      <div className="container">
        <div className="Health-Pistachios">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center" data-aos="fade-up">
              <div className="health-image shadow-sm  mb-5 bg-body-tertiary rounded position-relative">
                <img src={shop.image} alt="" />
                <p className="c-title p-2 rounded-4 mt-3 ms-3 position-absolute set-position">
                  {shop.Ctgtitle}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="health-info" data-aos="fade-down">
                <div className="health-title">
                  <h1>{shop.CtgName}</h1>
                  <img src={Image3} alt="" className="mb-2" />
                  <div className="price d-flex">
                    <p className='dollar me-3'>{shop.Wprice}</p>
                    <p>{shop.Rprice}</p>
                  </div>
                  <p className='health-para'>{shop.Description}</p>
                  <div className="d-flex align-items-center mt-5 Quantity">
                    <h3 className='add'>Quantity :</h3>
                    <div className="add-cart d-lg-flex d-md-flex align-items-center">
                      <input
                        type="number"
                        className='cart-number ms-lg-4 ms-md-4 mt-0 mb-0'
                        placeholder=''
                        value={quantity}
                        onChange={(e) => handleChange(e)}
                      />
                      <div>
                        <Button
                          class={"shop ms-3 text-white border-0 add-to"}
                          btn={"Add To Cart"}
                          backgroundColor={"#274C5B"}
                          onClick={handleClick}
                          icons={
                            <GoArrowRight className="side-icon ms-2 rounded-circle text-white" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-two-btn d-flex justify-content-center">
            <button className='product-btn-1 text-white me-lg-3 me-md-3 border-0 rounded-4 fw-bolder'>Product Description</button>
            <button className='product-btn-2 border-0 rounded-4 fw-bolder'>Additional Info</button>
          </div>
          <p className='btn-info text-center'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        </div>

      </div>
      <Link to={"/shop"}>
        <div className="related-product">
          <div className="container">
            <div className="related-title">
              <h1 className='text-center fw-bold mb-lg-5 mb-md-5'>Related Products</h1>
            </div>
            <div className="row justify-content-center">
              {shop_single_card.map((item) => (
                <div className="col-lg-3 col-md-6 mb-5 position-relative add-hover">
                  <Category product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>

      <Sub />
    </>
  )
}

export default ShopSingle;
