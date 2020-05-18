import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppMain2 from "./components/AppMain2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />
            <Route path="/" exact component={AppMain2} />
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
