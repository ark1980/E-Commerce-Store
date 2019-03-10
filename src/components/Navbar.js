import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonWrapper } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar fixed-top p-5">
        <Link to="/" className="navbar-brand logo">
          <i className="fas fa-barcode" />
          E-Electronic
        </Link>
        <ul className="nav align-items-center justify-content-end">
          <li className="nav-item">
            <strong>
              <Link to="/" className="nav-link">
                products
              </Link>
            </strong>
          </li>
          <li className="nav-item">
            <ButtonWrapper>
              <Link to="/cart" className="nav-link">
                <i className="fas fa-cart-plus" /> cart
              </Link>
            </ButtonWrapper>
          </li>
        </ul>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--yellow);
  padding: 3rem 10rem !important;
  border-bottom: 0.1rem solid var(--darkBlue);
  .nav-link {
    color: var(--darkBlue) !important;
    font-size: 2rem;
    text-transform: uppercase;

    &:hover {
      color: var(--ligthBlue) !important;
      transition: 0.3s ease;
    }
  }
`;

export default Navbar;
