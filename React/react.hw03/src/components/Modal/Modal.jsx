import React from 'react';
import styles from './Modal.module.scss';
import buttonModal from '../../config/buttonModal';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { title, text, actions, isOpen, setIsOpen } = props;

  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.background} onClick={() => setIsOpen(false)}/>

      <div className={styles.modal}>
        <Button onClick={() => setIsOpen(false)} text={buttonModal[3].text}/>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.buttons}>{actions}</div>
      </div>

    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  closeButton: PropTypes.func,
}

Modal.defaultProps = {
  header: 'information',
  text: 'Confirm your actions.',
  closeButton: () => {},
}

export default Modal;
