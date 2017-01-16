import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * Stateless Component responsible for rendering Application Header
 */

const styles = {
  appBar: {
    position: 'fixed',
    backgroundColor: '#000',
    left: 0,
    top: 0
  },
  img: {
    width: 50,
    height: 50
  },
  title: {
    color: '#E50914'
  }
};

const Header = ({ title, rightElement }) => (
  <AppBar
    title={title}
    style={styles.appBar}
    titleStyle={styles.title}
    iconElementLeft={<img src="../../img/shortcut-icon.png" style={styles.img}/>}
    iconElementRight={rightElement}
  />
);

Header.propTypes = {
  rightElement: PropTypes.element
};

export default Header;
