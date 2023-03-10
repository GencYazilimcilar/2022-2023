import React, { Component } from "react";

const ProcustsContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };
    case "setCategories":
      return { ...state, categories: action.payload };
    case "setSelectedMenuItem":
      return { ...state, selectedMenuItem: action.payload };
    default:
      return { ...state };
  }
};

export class ProductsProvider extends Component {
  state = {
    products: [],
    categories: [],
    selectedMenuItem: undefined,
    getCategories: () => this.getCategories(),
    dispatch: async (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  getCategories() {
    let gecici = [];
    this.state.products.forEach((item) => {
      let currentItemCategory = item.category;
      let control = false;
      gecici.forEach((item) => {
        if (item == currentItemCategory) {
          control = true;
        }
      });
      if (!control) {
        gecici.push(currentItemCategory);
      }
    });
    let len = 0;
    if (gecici.length > len) {
      this.setState({ categories: gecici });
      len = gecici.length;
      this.setState({ selectedMenuItem: gecici[0] });
    }
  }
  render() {
    return (
      <ProcustsContext.Provider value={this.state}>
        {this.props.children}
      </ProcustsContext.Provider>
    );
  }
}
const ProductsConsumer = ProcustsContext.Consumer;
export default ProductsConsumer;
