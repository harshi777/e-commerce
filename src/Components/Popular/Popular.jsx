import "./Popular.css";
import data_product from "../Assets/Assets/Frontend_Assets/data";
import Item from "../Item/Item";
function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              it={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
