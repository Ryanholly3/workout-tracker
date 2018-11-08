import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Image, Grid, Segment, Divider } from 'semantic-ui-react';
import '../App.css';

class Profile extends Component {


  render() {
    let swimCount = this.props.currentUser[0].swims.length
    let bikeCount = this.props.currentUser[0].bikes.length
    let runCount = this.props.currentUser[0].runs.length

    let swimTotalDistance = () =>{
      let result = 0
      for(let i = 0; i < swimCount; i++){
        result += this.props.currentUser[0].swims[i].distance
      }
      return result
    }

    let bikeTotalDistance = () =>{
      let result = 0
      for(let i = 0; i < bikeCount; i++){
        result += this.props.currentUser[0].bikes[i].distance
      }
      return result
    }

    let runTotalDistance = () =>{
      let result = 0
      for(let i = 0; i < runCount; i++){
        result += this.props.currentUser[0].runs[i].distance
      }
      return result
    }

    return (
      <Container className="profile">
        <h1>Profile</h1>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <div className="user-info">
                <Image src='https://via.placeholder.com/100' size='small' rounded />
                <Container>
                  <p>Name: { this.props.currentUser[0].name }</p>
                  <p>Age: { this.props.currentUser[0].age }</p>
                  <p>Gender: { this.props.currentUser[0].gender }</p>
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
                <p>Total Swims: {swimCount} </p>
                <p>Total yards: { swimTotalDistance() }</p>
                <p>Total calories burnt: </p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <h3>Bike Summary</h3>
                <p>Total Bikes: {bikeCount}</p>
                <p>Total miles: { bikeTotalDistance() }</p>
                <p>Total calories burnt: </p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <h3>Run Summary</h3>
                <p>Total Runs: {runCount}</p>
                <p>Total miles: { runTotalDistance() }</p>
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
