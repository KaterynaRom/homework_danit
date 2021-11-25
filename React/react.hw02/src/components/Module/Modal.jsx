import React, {PureComponent} from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

class Modal extends React.PureComponent {

  render () {
    const { header, text, closeModal, actions, closeButton } = this.props;

    return (
      <div className={styles.modalWrapper}>
        <div className={styles.background} onClick={closeModal}/>
        <div className={styles.modal}>
          {closeButton}
          <div className={styles.titleWrapper}>
            <div className={styles.title}>{header}</div>
          </div>
          <div className={styles.text}>{text}</div>
          <div className={styles.buttons}>{actions}</div>
        </div>
      </div>

    );
  }
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  closeModal: PropTypes.func,
  actions: PropTypes.array.isRequired,
  closeButton: PropTypes.func,
}

Modal.defaultProps = {
  header: 'information',
  text: 'Confirm your actions.',
  closeModal: () => {},
  closeButton: () => {},
}

export default Modal;
