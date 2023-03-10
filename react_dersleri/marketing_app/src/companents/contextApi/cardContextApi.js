import React, { Component } from "react";
const CardContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      return { ...state, card: [] };
    case 'SET_CARD_CONTROL':
      return { ...state, cardControl: action.payload};
    default:
      return { ...state };
  }
};
export class CardProvider extends Component {
  state = {
    card: [],
    cardControl:false,
    addToCard: (product) => this.addToCard(product),
    deleteToCard: (product) => this.deleteToCard(product),
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  addToCard = (product) => {
    this.setState({
      card: [...this.state.card, product],
      cardControl:true,
    });
  };
  deleteToCard = (product) => {
    const card = this.state.card;
    card.forEach((item) => {
      if (item.id == product.id) {
        const index = card.indexOf(item);
        card.splice(index, 1);
        return;
      }
    });
    this.setState({ card: card ,cardControl:true});
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
