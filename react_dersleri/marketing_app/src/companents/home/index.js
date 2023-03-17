import Slider from "../slider";
import Content from "../content";
import React from "react";
import ProductsConsumer from "../contextApi/productsContextApi";
function Home() {
  return (
    <ProductsConsumer>
      {(values) => {
        const { products, categories, dispatch } = values;
        if (products.length === 0) {
          console.log("Ürünler boş");
        }
        return (
          <div>
            <div className="row px-5 py-4">
              <div className="col-md-3 my-3">
                <Slider />
              </div>
              <div className="col-md-9 my-3">
                <Content />
              </div>
            </div>
          </div>
        );
      }}
    </ProductsConsumer>
  );
}

export default Home;
