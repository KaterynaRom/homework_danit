import React from 'react';
import PropTypes from 'prop-types';

class ButtonModal extends React.PureComponent {

  render() {
    const {text, onClick} = this.props;
    return(
      <button onClick={onClick}>{text}</button>
    )
  }
}

ButtonModal.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes,
}

ButtonModal.defaultProps = {
  onClick: () => {},
}

export default ButtonModal