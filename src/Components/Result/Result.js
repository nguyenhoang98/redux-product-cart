import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
  render() {
    const { productsCart } = this.props;
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Tổng Tiền</td>
        <td>
          {productsCart.reduce((total, value) => {
            return total + value.product.price * value.quantity;
          }, 0)}
          $
        </td>
      </tr>
    );
  }
}
export default Result;
