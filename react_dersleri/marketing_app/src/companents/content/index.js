import React from "react";
import CardConsumer from "../contextApi/cardContextApi";
import ProductsConsumer from "../contextApi/productsContextApi";
export default function Content() {
  const getContent = (products, selectedMenuItem, addToCard) => {
    let cards = products.map((item) => {
      return (
        item.category == selectedMenuItem && (
          <div
            key={item.id}
            className="col-md-4 px-3 py-3"
            style={{ width: "18rem;", display: "flex", alignItems: "stretch" }}
          >
            <div className="card" key={item.id + "card"}>
              <img
                src={item.thumbnail}
                key={item.id + "cardImg"}
                style={{ height: "250px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" key={item.id + "card-body"}>
                <h5
                  className="card-title"
                  key={item.id + "card-body-h5"}
                  onClick={() => {
                    window.location.href = `/product/${item.id}`;
                  }}
                >
                  {item.title}
                </h5>
                <p className="card-text" key={item.id + "card-text"}>
                  {item.description}
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  key={item.id + "card-footer"}
                >
                  <h4 key={item.id + "card-footer-h4"}>${item.price}</h4>
                  <button
                    className="btn btn-primary"
                    key={item.id + "card-footer-btn"}
                    onClick={() => addToCard(item)}
                  >
                    Add to Card
                  </button>
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
            {(values) => {
              const { addToCard } = values;
              return (
                <div className="row">
                  {getContent(products, selectedMenuItem, addToCard)}
                </div>
              );
            }}
          </CardConsumer>
        );
      }}
    </ProductsConsumer>
  );
}
