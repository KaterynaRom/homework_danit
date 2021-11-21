import React, {PureComponent} from 'react';
import styles from './Modal.module.scss';

class Modal extends React.PureComponent {
  render(){
    const { title, text, closeModal, actions, closeButton } = this.props;
    console.log(this.props)

    return (
      <div className={styles.background} onClick={closeModal}>
        <div className={styles.modal}>
          {closeButton}
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.text}>{text}</div>
          <div className={styles.buttons}>{actions}</div>
        </div>
      </div>
    );
  }
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
