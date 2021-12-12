import React from 'react';
import styles from './Modal.module.scss';
import buttonModal from '../../config/buttonModal';
import Button from '../Button/Button';

const Modal = () => {

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.background}/>

      <div className={styles.modal}>
        <Button text={buttonModal[3].text}/>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>title modal</div>
        </div>
        <div className={styles.text}>Text modal</div>
        {/*<div className={styles.buttons}>{actions}</div>*/}
      </div>

    </div>
  );
}

export default Modal;
