import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Intocode Coding Shopcamp
        </Link>
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
