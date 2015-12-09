import { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <h2>User: {this.props.params.id}</h2>
    );
  }
};
