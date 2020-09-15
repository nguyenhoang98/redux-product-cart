import React, { Component } from "react";
import './Product.css' ;
class Product extends Component {
  renderRating = (rating)=>{
     let xhtml = [] ;
     for(var i = 1 ; i <= rating ; i++){
       xhtml.push(<i key = {i} className="fa fa-star" aria-hidden="true"></i>)
     }
     for(var j = 1 ; j <= 5-rating ; j++){
       xhtml.push(<i key = {j+rating} className="fa fa-star-o" aria-hidden="true"></i>)
     }
     return xhtml ;
  }
  onAddProduct = (product, quantity) => {
    this.props.onAddProduct(product, quantity);
  };
  render() {
    const { product, index } = this.props;
    return (
      <div className="product-item" key={index}>
        <div className="product-item-img">
          <img src={product.src} alt={product.name} />
        </div>
        <div className="product-item-content">
          <div className="product-item-name">{product.name}</div>
          <div className="product-item-rating">
            {
              this.renderRating(product.rating)
            }
          </div>
          <div className="product-item-description">{product.description}</div>
          <div className="product-item-cart">
            <button
              className="btn btn-add-cart"
              onClick={() => this.onAddProduct(product, 1)}
            >
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
