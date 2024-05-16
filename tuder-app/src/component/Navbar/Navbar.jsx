import React from 'react';
import './NavBar.css';
import { Link, Routes, Route } from 'react-router-dom';
import MainBody from '../MainBody/MainBody';
import LoginPage from '../LoginPage/LoginPage';
import Signup from '../Signup/Signup';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="" alt="logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/"><span>Home</span></Link></li>
            <li><span>Find tutor</span></li>
            <li><span>Become a tutor</span></li>
            <li><span>Community</span></li>
            <li className="login-btn"><Link to="/login"><button>Login</button></Link></li>
            <li className="signup-btn"><Link to="/signup"><button>Signup</button></Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Navbar;
