import React, { Component } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "set_sayac":
      return { ...state, sayac: action.payload };
    case 'set_name':
        return { ...state, name: action.payload };
    case 'set_surname':
        return { ...state, surname: action.payload };
    default:
      return { ...state };
  }
};
const SayacContext = React.createContext();
export class SayacProvider extends Component {
  state = {
    sayac: 90,
    name: "",
    surname: "",
    arttir: () => {
      this.sayaciArttir();
    },
    azalt: () => {
      this.sayaciAzalt();
    },
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  sayaciArttir() {
    this.setState({ sayac: this.state.sayac + 1 });
  }
  sayaciAzalt() {
    this.setState({ sayac: this.state.sayac - 1 });
  }
  render() {
    return (
      <SayacContext.Provider value={this.state}>
        {this.props.children}
      </SayacContext.Provider>
    );
  }
}
const SayacConsumer = SayacContext.Consumer;
export default SayacConsumer;
