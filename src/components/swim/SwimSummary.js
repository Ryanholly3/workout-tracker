import React, { Component } from 'react';
import SwimList from './SwimList';
import SwimInput from './SwimInput';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import '../../App.css';

class SwimSummary extends Component {

  render() {
    return (
      <Container>
        <div className="swim-summary">
          <div className="swim-list">
            <div>
              <Image src='https://via.placeholder.com/150' avatar />
              <span>USERNAME</span>
            </div>
            <h2>Swimming</h2>
            <SwimList />
          </div>
          <div className="swim-input">
            <SwimInput />
          </div>
        </div>
      </Container>
    );
  }
}

export default SwimSummary;
