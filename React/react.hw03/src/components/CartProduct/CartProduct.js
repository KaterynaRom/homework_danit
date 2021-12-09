import React from 'react';
import styles from './CartProduct.module.scss';

const CartProduct = ({ name, img, code, count, openModal }) => {
    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={img} alt="img"/>
            <span className={styles.name}>{name}</span>
            <span className={styles.code}>(code: {code})</span>
          </div>

          <div className={styles.wrapper}>
              <span className={styles.count}>{count}</span>
              <button className={styles.deleteBtn} onClick={() => openModal(name, 'delete')}>Delete</button>
          </div>
        </div>
    )
}

export default CartProduct;