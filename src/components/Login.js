import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state= {
      users: [],
      currentUser: [],
    }
  }

  render() {
    return (
      <div className="login">
        <h1>LOGIN</h1>
      </div>
    );
  }
}

export default Login;
