import "./Navbar.css";
import logo from "../Assets/Assets/Frontend_Assets/logo.png";
import cartIcon from "../Assets/Assets/Frontend_Assets/cart_icon.png";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/Assets/Frontend_Assets/dropdown_icon.png";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  function dropdown_toggle(e) {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul className="nav-menu" ref={menuRef}>
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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
