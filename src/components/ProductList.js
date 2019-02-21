import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => (
          <div className="row">
            <div className="col-md">
              <Title name="our" title="products" />
            </div>
            <div className="row">
              {data.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default ProductList;
