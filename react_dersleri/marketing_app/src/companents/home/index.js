import Slider from "../slider";
import Content from "../content";
import React from "react";
import ProductsConsumer from "../contextApi/productsContextApi";
function Home() {
  return (
    <ProductsConsumer>
      {(values) => {
        const { products, categories } = values;
        return (
          <>
            {products.length > 0 && categories.length > 0 ? (
              <div className="row px-5 py-4">
                <div className="col-md-3 my-3">
                  <Slider />
                </div>
                <div className="col-md-9 my-3">
                  <Content />
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>Loading...</h3>
              </div>
            )}
          </>
        );
      }}
    </ProductsConsumer>
  );
}

export default Home;
