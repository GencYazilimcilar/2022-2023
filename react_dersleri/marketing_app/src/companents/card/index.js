import React from "react";
import CardConsumer from "../contextApi/cardContextApi";

export default function CardDetails() {
  const getContent = (card) => {
    return card.map((res) => {
      console.log(res);
      return (
        <div className="m-1 p-3" key={res.title + "mainDiv"}>
          <div
            key={res.title + "rowDiv"}
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      style={{ maxHeight: "150px", maxWidth: "150px" }}
                      src={res.thumbnail}
                    ></img>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <div className="m-2">
                      <h2 className="card-title">{res.title}</h2>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <div className="btn my-1">
                      <h6>${res.price}</h6>
                    </div>
                    <div>
                      <h3 className="btn my-1">Miktar:</h3>
                      <h4 className="btn my-1">{res.count}</h4>
                    </div>
                    <div className="mx-2">
                      <button className="btn btn-success m-1">+</button>
                      <button className="btn btn-danger m-1">-</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <CardConsumer>
      {(values) => {
        const { card, dispatch } = values;
        return (
          <div className="container">
            {card.length > 0 ? (
              getContent(card)
            ) : (
              <div
                className="container"
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2>Sepetiniz boş...</h2>
              </div>
            )}
          </div>
        );
      }}
    </CardConsumer>
  );
}
