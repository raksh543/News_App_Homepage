import React, { Component } from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

import AppMain2 from "./components/AppMain2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Politics from "./components/Politics"
import World from "./components/World"
import Europe from "./components/Europe"
import Economy from "./components/Economy"
import Money from "./components/Money"
import Business from "./components/Business"
import  Archive from "./components/Archive"

import Demo from "./components/Demo"
import MoreDemo from "./components/MoreDemo"
import Sports from "./components/Sports"
import Financial from "./components/Financial"
import Government from "./components/Government"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />
            <Switch>
            <Route path="/" exact component={AppMain2} />
            <Route path="/politics" component={Politics}/>
            <Route path="/world" component={World}/>
            <Route path="/europe" component={Europe}/>
            <Route path="/economy" component={Economy}/>
            <Route path="/money" component={Money}/>
            <Route path="/business" component={Business}/>
            <Route path="/archive" component={Archive}/>
            <Route path="/demo" component={Demo}/>
            <Route path="/moredemo" component={MoreDemo}/>
            <Route path="/government" component={Government}/>
            <Route path="/financial" component={Financial}/>
            <Route path="/sports" component={Sports}/>
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
