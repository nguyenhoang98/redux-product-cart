import React, { Component } from "react";
import "./Cart.css";
class Cart extends Component {
  render() {
    return (
      <div className="products-cart">
        <div className="products-cart-list">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Cart;
