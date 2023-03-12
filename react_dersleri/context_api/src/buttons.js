import React from "react";
import SayacConsumer from "./sayacContextApi";

export default function Buttons() {
  return (
    <SayacConsumer>
      {(value) => {
        const { arttir, azalt, dispatch } = value;
        return (
          <div>
            <button
              onClick={() => {
                arttir();
              }}
            >
              Arrtır
            </button>
            <button
              onClick={() => {
                azalt();
              }}
            >
              Azalt
            </button>
            <button
              onClick={() => {
                dispatch({ type: "set_sayac", payload: 0 });
              }}
            >
              Sayacı sıfırla
            </button>
          </div>
        );
      }}
    </SayacConsumer>
  );
}
