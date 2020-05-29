import React, { Component } from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

// SERVICES
import cardservice from './services/cardservice';

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
import Admin from "./Admin/Admin"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={apiResponse:""};
//   }
//   callApi(){
//     fetch
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }
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
            <Route path="/Admin" component={Admin}/>
            
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;








// /client/src/App.js

// import React, { useState, useEffect } from "react";

// // SERVICES
// import cardservice from './services/cardservice';
// cardservice.getAll();
// console.log("here in")

// function App() {
//   const [cards, setcards] = useState(null);

//   useEffect(() => {
//     if (!cards) {
//       getCards();
//     }
//   })

//   const getCards = async () => {
//     console.log("getting")
//     let res = await cardservice.getAll();
//     console.log(res);
//     setcards(res);
//   }

//   const renderCard = card => {
//     return (
//       <li key={card._id} className="list__item card">
//         <h3 className="card__name">{card.heading}</h3>
//         <p className="card__description">{card.description}</p>
//       </li>
//     );
//   };

//   return (
//     <div className="App">
//       <ul className="list">
//         {(cards && cards.length > 0) ? (
//           cards.map(card => renderCard(card))
//         ) : (
//             <p>No cards found</p>
//           )}
//       </ul>
//     </div>
//   );
// }

// export default App;