import React from "react";

class ButtonModal extends React.PureComponent {

  render() {
    const {text, onClick} = this.props;
    return(
      <button onClick={onClick}>{text}</button>
    )
  }
}

export default ButtonModal