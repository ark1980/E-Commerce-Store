import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const { title, price, img, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3 mx-auto">
        <div className="card p-5 mt-5">
          <div className="img-container p-5">
            <Link to="./details">
              <img src={img} className="card-img-top" alt={title} />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => console.log("You clicked on add to cart btn")}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between py-4">
          <h3 className="align-self-center mb-0">{title}</h3>
          <h2 className="text-dark-blue mb-0 font-italic">
            <span className="mr-2">$</span>
            {price}
          </h2>
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
