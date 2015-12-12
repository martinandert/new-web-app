import { Component, PropTypes } from 'react';

class User extends Component {
  render() {
    return (
      <h2>User: {this.props.params.id}</h2>
    );
  }
}

User.propTypes = {
  params: PropTypes.object.isRequired,
};

export default User;
