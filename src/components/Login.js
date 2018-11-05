import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react';
import { users } from '../users'
import '../App.css';

class Login extends Component {

  render() {
    return (
      <div className="login-page">
        <div className="ui raised segment login-box">
          <form className= "center">
            <h1>Workout Tracker</h1>
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
