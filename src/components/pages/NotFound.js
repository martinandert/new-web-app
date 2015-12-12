import { Component, PropTypes } from 'react';

class NotFound extends Component {
  render() {
    return (
      <h2>404 - Not Found: {this.props.params.splat}</h2>
    );
  }
}

NotFound.propTypes = {
  params: PropTypes.object.isRequired,
};

export default NotFound;
