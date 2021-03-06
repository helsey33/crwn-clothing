import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton";

import "./collection-item.scss";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => addItem(item)}
        inverted
      >
        Add to Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = {
  addItem: item => addItem(item)
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
