import React from 'react';
import styles from './CartProduct.module.scss';

const CartProduct = () => {
    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={'cscdc'} alt="img"/>
            <span className={styles.name}>name</span>
            <span className={styles.code}>(code: 00000)</span>
          </div>

          <div className={styles.wrapper}>
              <span className={styles.count}>1000</span>
              <button className={styles.deleteBtn}>Delete</button>
          </div>
        </div>
    )
}

export default CartProduct;