import React, { Component } from "react";
import Cart from "../../Components/Cart/Cart";
import { connect } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";
import { del_product, update_product } from "../Actions/Actions";
import Result from "../../Components/Result/Result";
class ContainersCart extends Component {
  render() {
    const { productsCart } = this.props;
    return (
      <Cart>
        {productsCart.map((product, index) => {
          return (
            <CartItem
              product={product}
              key={index}
              onDelProducts={this.props.onDelProducts}
              onUpdateCartProducts={this.props.onUpdateCartProducts}
            />
          );
        })}
        {productsCart && <Result productsCart={productsCart} />}
      </Cart>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productsCart: state.Cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDelProducts: (product) => {
      return dispatch(del_product(product));
    },
    onUpdateCartProducts: (product, count) => {
      return dispatch(update_product(product, count));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContainersCart);
