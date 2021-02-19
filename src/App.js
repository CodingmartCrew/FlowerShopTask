import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Carts from "./components/carts/Carts";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notfound/NotFound";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/carts" exact component={Carts} />
            <Route path="/notfound" exact component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
