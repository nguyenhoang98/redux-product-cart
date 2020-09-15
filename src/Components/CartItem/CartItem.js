import React, { Component } from "react";
import "./CartItem.css";
class CartItem extends Component {
  onDelProducts = (product) => {
    this.props.onDelProducts(product);
  };
  onUpdateCartProducts = (product, count) => {
    this.props.onUpdateCartProducts(product, count);
  };
  render() {
    const { product } = this.props;
    return (
      <tr>
        <td>
          <img src={product.product.src} alt={product.product.name} />
        </td>
        <td> {product.product.name} </td>
        <td> {product.product.price} </td>
        <td>
          <button
            className="btn btn-reduction"
            onClick={() => this.onUpdateCartProducts(product, -1)}
          >
            -
          </button>
          {product.quantity}
          <button
            className="btn btn-increase"
            onClick={() => this.onUpdateCartProducts(product, 1)}
          >
            +
          </button>
        </td>
        <td>{product.product.price * product.quantity}$</td>
        <td>
          <button
            className="btn btn-close"
            onClick={() => this.onDelProducts(product)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
}
export default CartItem;
