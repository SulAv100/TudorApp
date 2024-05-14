import React from "react";
import "./NavBar.css";
import { useContext, useState } from "react";
import { ClickedContext } from "../Context/Context";
import { Form, useNavigate } from "react-router-dom";
import MainBody from "../MainBody/MainBody";
import LoginPage from "../LoginPage/LoginPage";
function Navbar() {

  const { setHomeStatus } = useContext(ClickedContext);

  const handleClickStatus = (event) => {
    const data = event.target.textContent;
    if(data !== 'Home'){
        setHomeStatus(false);
        
    }else{
        setHomeStatus(true);
    }
  };


 
  return (
    <>
      <div className="overlay"></div>
      <header>
        <nav>
          <div className="logo-container">
            <img src="" alt="logo" />
          </div>
          <ul className="nav-links">
                <li><span onClick={handleClickStatus}>Home</span></li>
                <li><span>Find tutor</span></li>
                <li><span>Become a tutor</span></li>
                <li><span>Community</span></li>
                <li onClick={handleClickStatus} className="login-btn"><button>Login</button></li>
            </ul>

          
        </nav>
      </header>
     
    </>
  );
}

export default Navbar;
