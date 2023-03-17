import React from "react";
import CardConsumer from "../contextApi/cardContextApi";

export default function CardDetails() {
  const [localCard, setLocalCard] = React.useState(undefined);
  const [control, setControl] = React.useState(false);
  React.useEffect(() => {
    setControl(!control);
  }, []);

  const editData = (card, dispatch) => {
    let gecici = {};
    card.forEach((item) => {
      let count =
        gecici[item.title] !== undefined ? gecici[item.title].count + 1 : 1;
      gecici[item.title] = { ...item, count: count };
    });
    setLocalCard(gecici);
    dispatch({ type: "SET_CARD_CONTROL", payload: false });
    setControl(false);
  };
  const getContent = () => {
    if (localCard) {
      return Object.keys(localCard).map((item) => (
        <div className="m-1 p-3">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="col-md-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={localCard[item].thumbnail}
                width="100px"
                height="100px"
              />
            </div>
            <div className="col-md-6">
              <p>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Title: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].title}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Brand: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].brand}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Category: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].category}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Description: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].description}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Discount Percentage: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].discountPercentage}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Rating: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].rating}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Stock: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].stock}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <h6>Price: </h6>
                  </div>
                  <div className="col-md-2">
                    <label>{localCard[item].price}</label>
                  </div>
                </div>
                <h6>Count: </h6>
                <label>{localCard[item].count}</label>
              </p>
            </div>
          </div>
          <hr />
        </div>
      ));
    }
  };
  return (
    <CardConsumer>
      {(values) => {
        const { card, cardControl, dispatch } = values;
        return (
          <div className="container">
            {(cardControl || control) && editData(card, dispatch)}
            {card.length > 0 ? (
              getContent()
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
