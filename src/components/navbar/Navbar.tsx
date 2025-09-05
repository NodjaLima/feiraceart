import React from "react";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav>
        <div className="navbar-links">
            <a href="/">Home</a>
            <a href="/expositores">Expositores</a>
            <a href="/blog">Blog</a>
            <a href="/contato">Contato</a>
            <a href="/regulamento">Regulamento</a>
        </div>
        <div className="navbar-logo">
            <img src="/src/assets/logo.png" alt="Logomarca da Feira" />
        </div>
    </nav>
  );
}

export default Navbar;