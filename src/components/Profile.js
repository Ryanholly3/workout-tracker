import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Image, Grid, Segment, Divider } from 'semantic-ui-react';
import '../App.css';

class Profile extends Component {


  render() {
    return (
      <Container className="profile">
        <h1>Profile</h1>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <div className="user-info">
                <Image src='https://via.placeholder.com/100' size='small' rounded />
                <Container>
                  <p>Name: FILLER</p>
                  <p>Age: FILLER</p>
                  <p>Gender: FILLER</p>
                </Container>
              </div>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
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
