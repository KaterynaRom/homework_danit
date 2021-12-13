import React from 'react';
import styles from './Modal.module.scss';
import buttonModal from '../../config/buttonModal';
import Button from '../Button/Button';
import {setIsOpenModal} from "../../appStore/actionCreators";
import {shallowEqual, useDispatch, useSelector} from "react-redux";


const Modal = () => {
  const isOpenModal = useSelector((store) => store.modal.isOpenModal, shallowEqual);
  const dispatch = useDispatch();

  if (!isOpenModal) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.background} onClick={() => dispatch(setIsOpenModal(false))}/>

      <div className={styles.modal}>
        <Button text={buttonModal[3].text} onClick={() => dispatch(setIsOpenModal(false))}/>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>title modal</div>
        </div>
        <div className={styles.text}>Text modal</div>
        <div className={styles.buttons}>
          <Button text={buttonModal[0].text}
                  onClick={() => dispatch(setIsOpenModal(false))} //дописать добавление в корзину
                  // onClick={toggleModalFunctionality}
          />
          <Button onClick={() => dispatch(setIsOpenModal(false))} text={buttonModal[1].text}/>
        </div>
      </div>

    </div>
  );
}

export default Modal;
