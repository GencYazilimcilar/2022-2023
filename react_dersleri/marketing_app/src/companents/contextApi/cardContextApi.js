import React, { Component } from "react";
const CardContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      return { ...state, card: [] };

    default:
      return { ...state };
  }
};
export class CardProvider extends Component {
  state = {
    card: [],
    addToCard: (product) => this.addToCard(product),
    deleteToCard: (product) => this.deleteToCard(product),
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  addToCard = (product) => {
    if (this.state.card.length === 0) {
      this.setState({ card: [{ ...product, count: 1 }] });
    } else if (
      this.state.card.filter((item) => item.id === product.id).length > 0
    ) {
      let card = this.state.card.map((item) => {
        if (item.id === product.id) {
          let count = item.count ?? 0;
          let newItem = { ...item, count: count + 1 };
          return newItem;
        } else {
          return item;
        }
      });
      this.setState({ card: card });
    } else {
      this.setState({ card: [...this.state.card, { ...product, count: 1 }] });
    }
  };
  deleteToCard = (product) => {
    const card = this.state.card;
    card.forEach((item) => {
      if (item.id === product.id) {
        const index = card.indexOf(item);
        card.splice(index, 1);
        this.setState({ card: [...this.state.card] });
        return;
      }
    });
    this.setState({ card: card });
  };
  render() {
    return (
      <CardContext.Provider value={this.state}>
        {this.props.children}
      </CardContext.Provider>
    );
  }
}
const CardConsumer = CardContext.Consumer;
export default CardConsumer;
