import React, { useContext, useEffect, useState } from "react";
import logo from "../Image/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { header } from "../Data/Data";
import { Link } from "react-router-dom";
import { Contextex } from "../Context/Contex";
import "./Header.css"

const Header = () => {
  const { cart } = useContext(Contextex);
  const { setSearchQuery } = useContext(Contextex)
  const [visible, setVisible] = useState(false)

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, []);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  const toggleSearch = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="header-section">
        <nav className="navbar navbar-expand-lg header_main">
          <div className="container">
            <img src={logo} alt="" className="logo-image" />
            <a className="navbar-brand ms-2 heading fw-bold" href="#">
              Organick
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-3 peta-menu-start">
                {header.map((item, index) => (
                  <li key={index} className="nav-item mt-3 position-relative header_menu">
                    <Link
                      className="nav-link fw-bold option"
                      aria-current="page"
                      to={item.link}
                    >
                      {item.sub_menu}
                      {item.icon}
                      <ul className="position-absolute menu-item p-0">
                        {item?.peta_menu?.map((items, idx) => (
                          <li key={idx} className="nav-item position-relative text-center d-none sub-hover header_sub_menu">
                            <Link
                              className="nav-link active text-white fw-bold"
                              aria-current="page"
                              to={items.link}
                            >
                              {items.sub_menu}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Link>
                  </li>
                ))}
                <div className="position-relative">
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      className={`rounded-pill border-0 search-filed  ms-md-0 shadow-sm bg-body-tertiary rounded ${visible ? "d-block" : "d-none"
                        }`}
                      type="text"
                      onChange={handleSearchChange}
                      placeholder="Search..."
                    />
                    <div
                      className="position-absolute search-icon d-flex justify-content-center align-items-center"
                      onClick={toggleSearch}
                    >
                      <CiSearch onClick={(e) => handleSearchSubmit(e)} />
                    </div>

                  </form>
                </div>
                <Link to={"/cart"}>
                  <div className="carts-field d-flex gap-3 align-items-center">
                    <div className="cart-icon text-white d-flex align-items-center justify-content-center align-items-center">
                      <IoCartOutline />
                    </div>
                    <p className="cart fw-bold mb-0">Cart({cart})</p>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
