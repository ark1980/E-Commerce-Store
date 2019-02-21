import React, { Component } from "react";
import styled from "styled-components";

class Product extends Component {
  render() {
    const { title, price, img } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-6 my-3 mx-auto">
        <div className="card p-5 mt-5">
          <div className="img-container p-5">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>Price: ${price}</p>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent !important;
  }
`;

export default Product;
