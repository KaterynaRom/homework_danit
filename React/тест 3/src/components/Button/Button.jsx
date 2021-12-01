import styles from './Button.module.scss'
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {

  render() {
    const {text, onClick } = this.props;
    return(
      <button className={styles.button} onClick={onClick}>{text}</button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired ,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button