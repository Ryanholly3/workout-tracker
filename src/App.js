import React, { Component } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import SwimSummary from './components/swim/SwimSummary';
import BikeSummary from './components/bike/BikeSummary';
import RunSummary from './components/run/RunSummary';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      users: [],
      currentUser: [],
      loggedIn: false,
    }
  }

  async componentDidMount() {
    const response = await fetch('/users.json');
    const json = await response.json();
    this.setState({
      users: json,
    });
  }

  selectUser = (user) =>{
    this.setState({
      currentUser: user,
    })
  }

  logOut = () =>{
    this.setState({
      currentUser: [],
      loggedIn: false
    })
  }

  //Log in, triggered by GO button
  logIn = () =>{
    this.setState({
      loggedIn: true
    })
  }

  render() {
    if(this.state.loggedIn === true){
      return(
        <div className="App">
          <Router>
            <div>
              <Menu color="blue" inverted >
                <Menu.Item as={ Link } name='Login' to='/' onClick={ this.logOut } >
                  <Icon name='user' />
                  Logout
                </Menu.Item>
                <Menu.Item as={ Link } name='Profile' to='/profile'>
                  <Icon name='user' />
                  Profile
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item as={ Link } name='Swim' to='/swim'>
                    <Icon name='user' />
                    Swim
                  </Menu.Item>
                  <Menu.Item as={ Link } name='Bike' to='/bike'>
                    <Icon name='user' />
                    Bike
                  </Menu.Item>
                  <Menu.Item as={ Link } name='Run' to='/run'>
                    <Icon name='user' />
                    Run
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <Route exact
                path="/"
                render={(props)=> <Login users={ this.state.users } selectUser ={ this.selectUser } loggedIn = { this.state.loggedIn }/> }
              />
              <Route
                path="/profile"
                render={(props)=> <Profile users={ this.state.users } currentUser={ this.state.currentUser } loggedIn = { this.state.loggedIn }/> }
              />
              <Route
                path="/swim"
                render={(props)=> <SwimSummary users={ this.state.users } currentUser={ this.state.currentUser } loggedIn = { this.state.loggedIn }/> }
              />
              <Route
                path="/bike"
                render={(props)=> <BikeSummary users={ this.state.users } currentUser={ this.state.currentUser } loggedIn = { this.state.loggedIn }/> }
              />
              <Route
                path="/run"
                render={(props)=> <RunSummary users={ this.state.users } currentUser={ this.state.currentUser } loggedIn = { this.state.loggedIn }/> }
              />
            </div>
          </Router>
        </div>
      );
    } else if (this.state.loggedIn === false) {
      return (
        <div className="App">
          <Router>
            <div>
              <Menu color="blue" inverted >
                <Menu.Item as={ Link } name='Login' to='/'>
                  <Icon name='user' />
                  Login
                </Menu.Item>
              </Menu>
              <Route exact
                path="/"
                render={(props)=> <Login users={ this.state.users } selectUser ={ this.selectUser } logIn={ this.logIn } loggedIn = { this.state.loggedIn }/> }
              />
            </div>
          </Router>
        </div>
      );
    }
  }
}

export default App;
