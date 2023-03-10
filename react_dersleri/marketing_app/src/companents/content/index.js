import React from "react";
import { Navigate } from "react-router-dom";
import CardConsumer from "../contextApi/cardContextApi";
import ProductsConsumer from "../contextApi/productsContextApi";
export default function Content() {
  const getContent = (products, selectedMenuItem,addToCard) => {
    let cards = products.map((item) => {
      return (
        item.category == selectedMenuItem && (
          <div
            key={item.id}
            className="col-md-4 px-3 py-3"
            style={{ width: "18rem;", display: "flex", alignItems: "stretch" }}
          >
            <div className="card">
              <img
                src={item.thumbnail}
                style={{ height: "250px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => {
                    window.location.href = `/product/${item.id}`;
                  }}
                >
                  {item.title}
                </h5>
                <p className="card-text">{item.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>${item.price}</h4>
                  <button className="btn btn-primary" onClick={()=>addToCard(item)}>Add to Card</button>
                </div>
              </div>
            </div>
          </div>
        )
      );
    });
    return cards;
  };
  return (
    <ProductsConsumer>
      {(values) => {
        const { products, selectedMenuItem } = values;
        return (
          <CardConsumer>
            {
              (values) => {
                const {addToCard} = values;
                return(<div className="row">{getContent(products, selectedMenuItem,addToCard)}</div>);
              }
            }
          </CardConsumer>
        );
      }}
    </ProductsConsumer>
  );
}
