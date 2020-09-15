import React, { Component } from "react";
import Products from "../../Components/Products/Products";
import { connect } from "react-redux";
import Product from "../../Components/Product/Product";
import { add_product } from "../../Redux/Actions/Actions";
class ContainersProducts extends Component {
  render() {
    const { products } = this.props;
    return (
      <Products>
        {products.map((product, index) => {
          return (
            <Product
              product={product}
              key={index}
              onAddProduct={this.props.onAddProduct}
            />
          );
        })}
      </Products>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.Products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product, quantity) => {
      return dispatch(add_product(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContainersProducts);
