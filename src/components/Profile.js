import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Profile extends Component {


  render() {
    return (
      <Container className="profile">
        <h1>Profile</h1>
        <div className="user-info">
          <Image src='https://via.placeholder.com/150' size='small' rounded />
          <Container>
            <p>Name: FILLER</p>
            <p>Age: FILLER</p>
            <p>Gender: FILLER</p>
          </Container>
        </div>
        <div className='ui divider' />
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment raised>
                <h3>Swim Summary</h3>
                <p>Total Swims: </p>
                <p>Total miles: </p>
                <p>Total calories burnt: </p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <h3>Bike Summary</h3>
                <p>Total Bikes: </p>
                <p>Total miles: </p>
                <p>Total calories burnt: </p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <h3>Run Summary</h3>
                <p>Total Runs: </p>
                <p>Total miles: </p>
                <p>Total calories burnt: </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Profile;
