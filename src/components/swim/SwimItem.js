import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import '../../App.css';

class SwimItem extends Component {

  render(){
    return(
      <Table.Row>
        <Table.Cell>{ this.props.id }</Table.Cell>
        <Table.Cell>{ this.props.date }</Table.Cell>
        <Table.Cell>{`${this.props.distance} yards`}</Table.Cell>
        <Table.Cell>{ this.props.notes }</Table.Cell>
      </Table.Row>
    )
  }
}

export default SwimItem;
