import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsProvider } from "./companents/contextApi/productsContextApi.js";
import { CardProvider } from "./companents/contextApi/cardContextApi.js";
import App from "./companents/root/App";
import { BrowserRouter } from "react-router-dom";
import 'alertifyjs/build/css/alertify.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
