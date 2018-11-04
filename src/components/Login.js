import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'
import { users } from '../users'
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
            <Select placeholder='Select User' options={users} />
            <div className="ui divider" />
            <p>Password</p>
            <div className='ui input'>
              <input type='text' placeholder="Enter Password..." />
            </div>
            <div className="ui divider" />
            <Button color='blue' className='ui big button'>Go!</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
