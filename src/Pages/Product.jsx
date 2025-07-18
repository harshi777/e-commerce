import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log(productId);
  // console.log("all_products", all_product);
  const product = all_product?.find((e) => e.id === Number(productId));
  // console.log(product);
  return (
    <>
      {product ? (
        <div>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox />
          <RelatedProducts />
        </div>
      ) : (
        <h2 style={{ color: "red" }}>Product not found</h2>
      )}
    </>
  );
}

export default Product;
