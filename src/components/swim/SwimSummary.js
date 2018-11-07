import React, { Component } from 'react';
import SwimList from './SwimList';
import SwimInput from './SwimInput';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Image, Grid, Divider } from 'semantic-ui-react';
import '../../App.css';

class SwimSummary extends Component {

  render() {
    return (
      <Container>
        <div className="header">
          <h1 className="inline">Swimming</h1>
          <div>
            <Image src='https://via.placeholder.com/150' avatar />
            <span>USERNAME</span>
          </div>
        </div>
        <h3>Your swims</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <SwimList />
            </Grid.Column>
            <Grid.Column width={1}/>
            <Grid.Column width={5}>
              <SwimInput />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default SwimSummary;
