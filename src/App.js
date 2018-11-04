import React, { Component } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import SwimSummary from './components/swim/SwimSummary';
import BikeSummary from './components/bike/BikeSummary';
import RunSummary from './components/run/RunSummary';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      users: [],
      currentUser: [],
    }
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

const RouterEx = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/swim">Swim</Link>
        <Link to="/bike">Bike</Link>
        <Link to="/run">Run</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Route exact path="/" component={App}/>
      <Route exact path="/swim" component={SwimSummary}/>
      <Route exact path="/bike" component={BikeSummary}/>
      <Route exact path="/run" component={RunSummary}/>
      <Route exact path="/profile" component={Profile}/>
    </div>
  </Router>
)

export default RouterEx;
