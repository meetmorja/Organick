import React, { useContext, useEffect, useState } from 'react';
import "../Cart/Cart.css";
import Image2 from "../Image/Star.png";
import Button from '../Buttons/Button';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Contextex } from '../Context/Contex';

const Cart = () => {
    const [storecart, setStorecart] = useState([]);
    const [total, setTotal] = useState(0);
    const { searchQuery, setCart } = useContext(Contextex);

    useEffect(() => {
        let storedCart = JSON.parse(localStorage.getItem("newCart")) || [];
        setStorecart(storedCart);
    }, []);

    const handleIncreaseQuantity = (index) => {
        const updatedCart = [...storecart];
        updatedCart[index].quantity++;
        setStorecart(updatedCart);
        localStorage.setItem("newCart", JSON.stringify(updatedCart));
    };

    const handleDecreaseQuantity = (index) => {
        const updatedCart = [...storecart];
        updatedCart[index].quantity--;
        if (updatedCart[index].quantity === 0) {
            updatedCart.splice(index, 1);
        }
        setStorecart(updatedCart);
        setCart(updatedCart.length);
        localStorage.setItem("newCart", JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (index) => {
        const updatedCart = storecart.filter((item, i) => i !== index);
        setStorecart(updatedCart);
        localStorage.setItem("newCart", JSON.stringify(updatedCart));
        setCart(updatedCart.length);
    };

    useEffect(() => {
        calculateTotal(storecart);
    }, [storecart]);

    const calculateTotal = (cart) => {
        const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.Wprice.split("$").join(" "), 0).toFixed(2);
        setTotal(totalAmount);
    };

    const filteredCart = storecart.filter((item) =>
        item.CtgName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="shopitems mt-5">
                <div className="container">
                    {filteredCart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        filteredCart.map((item, index) => (
                            <div className="row justify-content-center align-items-center borders" key={index}>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="item-image position-relative">
                                        <img src={item.image} alt="" />
                                        <p className='position-absolute item-type p-1 rounded-1'>
                                            {item.Ctgtitle}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="item-information">
                                        <div className="item-title">
                                            <h2>{item.CtgName}</h2>
                                            <img src={Image2} alt="" />
                                            <div className="item-price d-flex">
                                                <div className="wrong-price">
                                                    <p className='text-decoration-line-through me-3'>{item.Wprice}</p>
                                                </div>
                                                <div className="correct-price">
                                                    <p className='fw-bold'>{item.Rprice}</p>
                                                </div>
                                            </div>
                                            <p>{item.Description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="item-add-remove">
                                        <div className="d-flex gap-3 mt-2 mt-lg-0 mb-3 align-items-center fs-3 center-set">
                                            <button className='px-3 rounded'
                                                onClick={() => handleDecreaseQuantity(index)}>-</button>
                                            <div>{item.quantity}</div>
                                            <button className='px-3 rounded' onClick={() => handleIncreaseQuantity(index)}>+</button>
                                        </div>
                                    </div>
                                    <div className="remove-btn mt-5">
                                        <Button
                                            className={"shop fw-bold "}
                                            btn={"Remove"}
                                            backgroundColor={"Red"}
                                            onClick={() => handleRemoveItem(index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="container">
                <Link to="/shop">
                    <div className="add-more-product  borders">
                        <Button
                            className={"shop fw-bold"}
                            btn={"Add More product"}
                            backgroundColor={"rgb(39, 76, 91)"}
                            icons={<GoArrowRight className="side-icon side ms-2 rounded-circle text-white" />}
                        />
                    </div>
                </Link>
            </div>
            {filteredCart.length > 0 && (
                <div className="total-bill">
                    <div className="container">
                        <div className="row justify-content-between align-items-center borders side-set">
                            <div className="col-lg-6">
                                <div className="total d-flex justify-content-center">
                                    <p className='fw-bold fs-2'>Total</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <div className="total-price-bill">
                                    <p className='fw-bold fs-2'>
                                        {`$${total}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
