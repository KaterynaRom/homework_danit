import React from 'react';
import styles from './Modal.module.scss';
import {setIsOpenModal, removeFromCart} from "../../appStore/actionCreators";
import {useDispatch, useSelector} from "react-redux";


const Modal = () => {
  const {isOpenModal, modalTitle, code } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {dispatch(setIsOpenModal(false))}

  if (!isOpenModal) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.background} onClick={closeModal}/>

      <div className={styles.modal}>
        <button onClick={closeModal}>✖</button>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Confirm Action</div>
        </div>
        <div className={styles.text}>{modalTitle}</div>
        <div className={styles.buttons}>
          <button
            onClick={()=> {
              dispatch(removeFromCart(code));
              closeModal();
            }}
            >Yes</button>

          <button onClick={closeModal}
          >No</button>
        </div>
      </div>

    </div>
  );
}

export default Modal;
