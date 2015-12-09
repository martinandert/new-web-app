import { Component } from 'react';
import { Link as RouterLink, IndexLink as RouterIndexLink } from 'react-router';

export default class Link extends Component {
  render() {
    if (this.props.index) {
      return <RouterIndexLink activeClassName={styles.active} {...this.props} />;
    }

    return <RouterLink activeClassName={styles.active} {...this.props} />;
  }
};

const styles = cssInJS({
  active: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
});
