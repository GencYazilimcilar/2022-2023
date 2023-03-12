import { useState } from "react";
import Buttons from "./buttons";
import SayacConsumer from "./sayacContextApi";
function App() {
  const [sayac,setSayac]=useState(0);
  return (
    <SayacConsumer>
      {(value) => {
        const {sayac}=value;
        return (
          <div style={{ marginTop: "45vh", marginLeft: "30vw" }}>
            <h1>React App</h1>
            <p>{sayac}</p>
            <Buttons />
          </div>
        );
      }}
    </SayacConsumer>
  );
}

export default App;
