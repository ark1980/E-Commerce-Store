import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import Details from "./Details";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { storeProducts } from "../data";

class App extends Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid" style={{ padding: "150px" }}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <ProductList {...props} products={this.state.products} />
              )}
            />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
