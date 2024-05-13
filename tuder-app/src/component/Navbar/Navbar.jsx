import React from 'react'
import './NavBar.css'

function Navbar() {
  return (
    <>
    <header>
    <nav>
            <div class="logo-container">
                <img src="" alt="logo"/>
            </div>
            <ul class="nav-links">
                <li><span>Find tutor</span></li>
                <li><span>Become a tutor</span></li>
                <li><span>Community</span></li>
                <li class="login-btn"><button>Login</button></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Navbar