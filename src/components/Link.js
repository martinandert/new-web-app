import { Component, PropTypes } from 'react';
import { Link as RouterLink, IndexLink as RouterIndexLink } from 'react-router';

class Link extends Component {
  render() {
    const LinkComponent = this.props.isIndex ? RouterIndexLink : RouterLink;

    return <LinkComponent activeClassName={styles.active} {...this.props} />;
  }
}

Link.propTypes = {
  isIndex: PropTypes.bool,
};

Link.defaultProps = {
  isIndex: false,
};

const styles = cssInJS({
  active: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
});

export default Link;
