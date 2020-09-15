import React, { Component } from "react";
import "./Products.css";
class Products extends Component {
  render() {
    return (
      <div className="products">
        <h2>thông tin Sản Phẩm</h2>
        <div className="product">{this.props.children}</div>
      </div>
    );
  }
}
export default Products;
