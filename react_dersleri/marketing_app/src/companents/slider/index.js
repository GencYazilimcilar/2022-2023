import React from "react";
import ProductsConsumer from "../contextApi/productsContextApi";

export default function Slider() {
  return (
    <ProductsConsumer>
      {(values) => {
        const {categories,selectedMenuItem,dispatch} = values;
        return (
          <div>
            <ul className="list-group">
              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    dispatch({type:'setSelectedMenuItem',payload:item});
                  }}
                  className={
                    selectedMenuItem == item
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </ProductsConsumer>
  );
}
