import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
} from "react-router-dom";
import {router} from "./companents/router/index.js";
import { ProductsProvider } from "./companents/contextApi/productsContextApi.js";
import { CardProvider } from "./companents/contextApi/cardContextApi.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CardProvider>
        <RouterProvider router={router} />  
      </CardProvider>
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
