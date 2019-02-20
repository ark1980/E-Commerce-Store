import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";

class ProductList extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div className="row">
        <div className="col-md">
          <Title name="our" title="products" />
        </div>
        <div className="row">
          {this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
