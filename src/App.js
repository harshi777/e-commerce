import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import men_bannar from "./Components/Assets/Assets/Frontend_Assets/banner_mens.png";
import women_bannar from "./Components/Assets/Assets/Frontend_Assets/banner_women.png";
import kid_bannar from "./Components/Assets/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_bannar} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women_bannar} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kid_bannar} />}
          />
          <Route path="/product/:productId" element={<Product />} />
          {/* <Route path=":productId" element={<Product />} /> */}
          {/* </Route> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
