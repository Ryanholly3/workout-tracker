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
      <div className="login-page">
        <div className="login-box">
          <form className= "center">
            <h1>Login</h1>
            <p>Username</p>
            <select>
              <option value="user1">Ryan</option>
              <option value="user2">Stephan</option>
              <option value="user3">Logan</option>
              <option value="user4">Mark</option>
            </select>
            <p>Password</p>
            <div className='ui input'>
              <input type='text' placeholder="Enter Password..." />
            </div>
            <div className="ui divider" />
            <button className='ui big button'>Go!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
