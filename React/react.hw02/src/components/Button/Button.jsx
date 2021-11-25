import styles from './Button.module.scss'
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {

  render() {
    const {text, onClick, backgroundColor} = this.props;
    return(
      <button className={styles.button} onClick={onClick} style={{backgroundColor}}>{text}</button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired ,
  onClick: PropTypes,
  backgroundColor: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  backgroundColor: 'white',
}

export default Button