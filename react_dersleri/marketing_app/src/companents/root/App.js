import React from "react";
import Routers from "../routers/index.js";
import Navi from "../navi/index.js";
import ProductsConsumer from "../contextApi/productsContextApi";
function App() {
  return (
    <ProductsConsumer>
      {(values) => {
        const { products, getCategories,getData, categories } = values;
        return (
          <>
            {products.length < 1 && getData()}
            {products.length > 0 && categories.length < 1 && getCategories()}
            <Navi />
            <Routers />
          </>
        );
      }}
    </ProductsConsumer>
  );
}

export default App;
