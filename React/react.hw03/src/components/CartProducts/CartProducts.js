import React from 'react';
import styles from './CartProducts.module.scss';


const CartProducts = ({ name, code, count, openModal }) => {
    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <span>{name}</span>
            <span>{code}</span>
          </div>

          <div className={styles.wrapper}>
              <span>{count}</span>
              <button onClick={() => openModal(name, 'delete')}>Delete</button>
          </div>
        </div>
    )
}

export default CartProducts;