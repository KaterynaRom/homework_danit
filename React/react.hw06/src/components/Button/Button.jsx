import styles from './Button.module.scss'
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {text, onClick } = props;

  return(
    <button role="button" className={styles.button} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired ,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button