import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Table, Menu, Icon } from 'semantic-ui-react';
import '../../App.css';

class SwimList extends Component {

  render() {
    return (
      <Container>
        <div className="swim-list">
          <Table color='blue' key='blue' striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width='two' >Number</Table.HeaderCell>
                <Table.HeaderCell width='two' >Date</Table.HeaderCell>
                <Table.HeaderCell width='two' >Distance</Table.HeaderCell>
                <Table.HeaderCell width='two' >Other</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>11/6/18</Table.Cell>
                <Table.Cell>4000 yards</Table.Cell>
                <Table.Cell>Terrible Swim...</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>11/7/18</Table.Cell>
                <Table.Cell>3500 yards</Table.Cell>
                <Table.Cell>Great swim!</Table.Cell>
              </Table.Row>
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
