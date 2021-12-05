import React from 'react';
import styles from './CartProducts.module.scss';


const CartProducts = ({ name, count, openModal }) => {
    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <span>{name}</span>
          </div>

          <div className={styles.wrapper}>
              <span>{count}</span>
              <button onClick={() => openModal(name, 'delete')}>Delete</button>
          </div>
        </div>
    )
}

export default CartProducts;