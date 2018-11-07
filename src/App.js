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
    alert('triggered')
    this.setState({
      currentUser: user
    })
  }


  //Log in function
  logIn = () => {

  }

  //Log out function

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Menu color="blue" inverted >
              <Menu.Item as={ Link } name='Login' to='/'>
                <Icon name='user' />
                Login
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
              render={(props)=> <Login users={ this.state.users} selectUser ={ this.selectUser }/> }
            />
            <Route
              path="/profile"
              render={(props)=> <Profile users={ this.state.users }/> }
            />
            <Route
              path="/swim"
              render={(props)=> <SwimSummary users={ this.state.users }/> }
            />
            <Route
              path="/bike"
              render={(props)=> <BikeSummary users={ this.state.users }/> }
            />
            <Route
              path="/run"
              render={(props)=> <RunSummary users={ this.state.users }/> }
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
