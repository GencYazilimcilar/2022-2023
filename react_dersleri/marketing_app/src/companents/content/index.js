import React from "react";
import { Navigate } from "react-router-dom";
export default function Content(props) {
  const getContent = () => {
    let cards = props.products.map((item) => {
      return (
        item.category == props.selectedMenuItem && (
            <div
            onClick={()=>{window.location.href=`/product/${item.id}`}}
            key={item.id}
            className="col-md-4 px-3 py-3"
            style={{ width: "18rem;", display:'flex',alignItems:'stretch'}}
          >
            <div className="card" >
              <img
                src={item.thumbnail}
                style={{height:'250px'}}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <h4>${item.price}</h4>
                  <button className="btn btn-primary">Add to Card</button>
                </div>
              </div>
            </div>
          </div>
        )
      );
    });
    return cards;
  };
  return <div className="row">{getContent()}</div>;
}
