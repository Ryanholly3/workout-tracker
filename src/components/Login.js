import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react';
import '../App.css';

class Login extends Component {

  selectUser = (e) => {
    let userName = e.target.innerText;
    let userInfo = this.props.users.filter((user)=>{
      return user.name === userName;
    })
    this.props.selectUser(userInfo)
  }

  goButton = (e) => {
    e.preventDefault();
    this.props.logIn();
    //conditional logic checking login, if not logged in, use react router redirect
    // this.props.logIn();
  }


  render() {
    var userNames = this.props.users.map((user)=> {
      return {
        key: user.name,
        text: user.name,
        value: user.name
      };
    })

    //Go BUTTON (should redirect to profile page, change user)
    if(this.props.loggedIn === true){
      return(<Redirect to="/profile"/>)
    }
    return (
      <div className="login-page">
        <div className="ui raised segment login-box">
          <form className= "center">
            <h1>Workout Tracker</h1>
            <p>Username</p>
            <Select placeholder='Select User' options={userNames} onChange={ this.selectUser }/>
            <div className="ui divider" />
            <p>Password</p>
            <div className='ui input'>
              <input type='text' placeholder="Enter Password..." />
            </div>
            <div className="ui divider" />
            <Button color='blue' className='ui big button' onClick={ this.goButton } >Go!</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
