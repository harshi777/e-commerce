import "./Navbar.css";
import logo from "../Assets/Assets/Frontend_Assets/logo.png";
import cartIcon from "../Assets/Assets/Frontend_Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "men" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cartIcon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
