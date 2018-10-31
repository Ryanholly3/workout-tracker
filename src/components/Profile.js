import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state= {
      currentUser: [],
    }
  }

  render() {
    return (
      <div className="login">
        <h1>PROFILE</h1>
      </div>
    );
  }
}

export default Profile;
