import React from 'react';
import './header.css';

function Header() {
  return (
      <header className="header">
        <div className="header-logo">LearnMate</div>
        <nav className="header-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="header-auth">
          <button className="login-btn">Login</button>
          <button className="logout-btn">Logout</button>
        </div>
      </header>
  );
}

export default Header;