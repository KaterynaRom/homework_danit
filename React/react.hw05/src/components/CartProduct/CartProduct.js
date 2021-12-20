import React from 'react';
import styles from './CartProduct.module.scss';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {setModalParams, setIsOpenModal} from "../../appStore/actionCreators";

const CartProduct = (prop) => {
  const {name, img, code, count} = prop;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(setModalParams({ code }));
    console.log(code)
    dispatch(setIsOpenModal(true));
  }

    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={img} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.code}>(code: {code})</span>
          </div>

          <div className={styles.wrapper}>
              <span className={styles.count}>{count}</span>
              <button onClick={handleDelete} className={styles.deleteBtn}>Delete</button>
          </div>
        </div>
    )
}

export default CartProduct;