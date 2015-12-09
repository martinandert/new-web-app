import { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <h2>404 - Not Found: {this.props.params.splat}</h2>
    );
  }
};
