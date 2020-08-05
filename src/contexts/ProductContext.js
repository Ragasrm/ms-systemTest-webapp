import React, { Component, createContext } from "react";

export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
