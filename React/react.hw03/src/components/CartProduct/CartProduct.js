import React from 'react';
import styles from './CartProduct.module.scss';


const CartProduct = ({ name, img, code, count, openModal }) => {
    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={img} alt="img"/>
            <span>{name}</span>
            <span>(code: {code})</span>
          </div>

          <div className={styles.wrapper}>
              <span>{count}</span>
              <button onClick={() => openModal(name, 'delete')}>Delete</button>
          </div>
        </div>
    )
}

export default CartProduct;