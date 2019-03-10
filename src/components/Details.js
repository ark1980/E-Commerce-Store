import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonWrapper } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart
          } = data.detailsProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-dark-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-10 col-md-6 my-3">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 tex-capitalize">
                  <h3 className="py-2">
                    <strong>Model: </strong>
                    <span className="text-uppercase">
                      <em>{title}</em>
                    </span>
                  </h3>
                  <h3 className="py-2">
                    <strong>Made By: </strong>
                    <span className="text-uppercase">
                      <em>{company}</em>
                    </span>
                  </h3>
                  <h3 className="py-2">
                    <strong>Price: </strong>
                    <span className="text-uppercase">
                      <em>${price}</em>
                    </span>
                  </h3>
                  <h3 className="text-capitalize font-weight-bold mt-4">
                    Some Info About the Product:
                  </h3>
                  <p className="productDetail">{info}</p>
                  <Link to="/">
                    <ButtonWrapper btnInDetailPage>
                      Back to Products
                    </ButtonWrapper>
                  </Link>
                  <ButtonWrapper
                    disabled={inCart ? true : false}
                    btnInDetailPage
                    onClick={() => data.addToCart(id)}
                  >
                    {inCart ? "In Cart" : "Add to Cart"}
                  </ButtonWrapper>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
