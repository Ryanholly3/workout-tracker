import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import '../../App.css';

class SwimList extends Component {

  render() {
    return (
      <Container>
        <div className="swim-list">
          <h2>Swim list</h2>
        </div>
      </Container>
    );
  }
}

export default SwimList;
