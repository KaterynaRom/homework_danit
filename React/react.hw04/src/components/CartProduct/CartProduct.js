import React from 'react';
import styles from './CartProduct.module.scss';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

const CartProduct = (prop) => {
  const {name, img, code, count} = prop;

    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={img} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.code}>(code: {code})</span>
          </div>

          <div className={styles.wrapper}>
              <span className={styles.count}>{count}</span>
              <button className={styles.deleteBtn}>Delete</button>
          </div>
        </div>
    )
}

export default CartProduct;