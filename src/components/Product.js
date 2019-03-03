import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
                <p
                  className="mb-0 font-weight-bold"
                  disabled
                  style={{ color: "#D3D3D3" }}
                >
                  Already in Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus fa-lg" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <h3 className="align-self-center mb-0">{title}</h3>
            <h2 className="text-dark-blue mb-0 font-italic">
              <span className="mr-2">$</span>
              {price}
            </h2>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  inCart: PropTypes.bool,
  img: PropTypes.string
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent !important;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.7s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.06);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--ligthBlue);
    color: var(--darkBlue);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 1rem 0 0 0;
    transition: all 0.7s linear;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--white);
    cursor: pointer;
  }
`;

export default Product;
