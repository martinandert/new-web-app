import { Component, PropTypes } from 'react';
import Link from './Link';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>

        <ul>
          <li><Link to="/" isIndex>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/user/Martin">User: Martin</Link></li>
          <li><Link to="/users/Martin?foo=bar#hash">User: Martin (redirects)</Link></li>
          <li><Link to="/not-found">Not Found</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
};

export default App;
