import React from "react";
import Routers from "../routers/index.js";
import Navi from "../navi/index.js";
import ProductsConsumer from "../contextApi/productsContextApi";
import { getData } from "../root/firebase_config";
function App() {
  const [control, setControl] = React.useState(false);
  const [categoryControl, setCategoryControl] = React.useState(true);
  const getDataFunk = async (dispatch) => {
    let data = await getData("/products");
    if (data) {
      dispatch({ type: "setProducts", payload: data });
      setControl(true);
    }
  };
  const getCategory = (getCategories) => {
    getCategories();
    setCategoryControl(false);
  };
  return (
    <ProductsConsumer>
      {(values) => {
        const { products, getCategories, dispatch } = values;
        if (!control) {
          getDataFunk(dispatch);
        }
        return (
          <>
            {products.length > 0 &&
              categoryControl &&
              getCategory(getCategories)}

            <Navi />
            <Routers />
          </>
        );
      }}
    </ProductsConsumer>
  );
}

export default App;
