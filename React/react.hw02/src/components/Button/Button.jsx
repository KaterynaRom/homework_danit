import styles from './Button.module.scss'
import React from "react";

class Button extends React.PureComponent {

  render() {
    const {text, onClick, backgroundColor} = this.props;
    return(
      <button onClick={onClick} style={{backgroundColor}}>{text}</button>
    )
  }
}

export default Button