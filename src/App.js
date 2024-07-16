import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import ShopSingle from "./Components/Shop-single.js/ShopSingle";
import Services from "./Components/Services/Services";
import Single_services from "./Components/Services-S/Services-single";
import Portfolio from "./Components/Portfolio/Portfolio";
import Portfolio_single from "./Components/Portfolio-single/Portfolio-single";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import Blog_S from "./Components/Blog-single/Blog-S";
import Contact from "./Components/Contact_us/Contact";
import Error from "./Components/Error/Error";
import Licenses from "./Components/Licenses/Licenses";
import Chnagelog from "./Components/Changelog/Changelog";
import Changelog from "./Components/Changelog/Changelog";
import Password from "./Components/Password/Password";
import { Contextex } from "./Components/Context/Contex";
import Cart from "./Components/Cart/Cart";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
AOS.init();

function App() {


  const [cart, setCart] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <Contextex.Provider value={{ cart, setCart, searchQuery, setSearchQuery }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shopSingle" element={<ShopSingle />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Services-single" element={<Single_services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Portfolio_single" element={<Portfolio_single />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog-Single" element={<Blog_S />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
            <Route path="/Licenses" element={<Licenses />} />
            <Route path="/Changelog" element={<Changelog />} />
            <Route path="/password" element={<Password />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Contextex.Provider>
  );
}

export default App;


// import React, { useRef } from 'react'

// const App = () => {

//   const inputElement = useRef();
//   const inputElement2 = useRef();

//   const focusInput = () => {
//     inputElement2.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <input type="Pass" ref={inputElement2} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   )
// }

// export default App
