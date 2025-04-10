import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>My Cool Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </nav>
    </header>
  );
}

export default Header;
