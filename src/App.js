import React, { Component } from 'react';
import Login from './components/Login';
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
        <div className="nav-bar">
          <Login />
        </div>
      </div>
    );
  }
}

const RouterEx = () => (
  <Router>
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Login</Link>
        <Link to="/admin" className="navbar-brand">Admin</Link>
      </nav>
      <Route exact path="/" component={App}/>
      <Route exact path="/admin" component={Admin}/>
    </div>
  </Router>
)
