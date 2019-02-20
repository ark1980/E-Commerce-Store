import React, { Component } from "react";
import styled from "styled-components";

class Product extends Component {
  render() {
    const { title } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3 mx-auto">
        <div className="card p-5 mt-5">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
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
