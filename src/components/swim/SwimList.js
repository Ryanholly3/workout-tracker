import React, { Component } from 'react';
import SwimItem from './SwimItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Table, Menu, Icon } from 'semantic-ui-react';
import '../../App.css';

class SwimList extends Component {

  swimItem(){
    return this.props.currentUser[0].swims.map((swim, i)=> <SwimItem key={i} id={ swim.swimId } date={ swim.date } distance={ swim.distance } notes={ swim.notes }/>)
  }

  render() {
    return (
      <Container>
        <div className="swim-list">
          <Table color='blue' key='blue' striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width='one' >Number</Table.HeaderCell>
                <Table.HeaderCell width='two' >Date</Table.HeaderCell>
                <Table.HeaderCell width='three' >Distance</Table.HeaderCell>
                <Table.HeaderCell width='six' >Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              { this.swimItem() }
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </Container>
    );
  }
}

export default SwimList;
