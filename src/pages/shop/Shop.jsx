import React, { Component } from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/preview-collection/CollectionPreview";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...oterCollectionProps }) => (
          <CollectionPreview key={id} {...oterCollectionProps} />
        ))}
      </div>
    );
  }
}
