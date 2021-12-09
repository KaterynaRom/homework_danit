import React from 'react';
import CartProduct from '../../components/CartProduct';
import styles from './CartPage.module.scss'

const CartPage = ({ cart, openModal, products }) => {
  let cartArray = [];
  cart.forEach(({code, count}) => {
    products.forEach(product => product.code === code && cartArray.push(
      <CartProduct openModal={openModal} count={count} code={code} name={product.name} img={product.img} />))
  });

  return (
    <>
      <div className={styles.wrapper}>
      <h1>CART</h1>
        {cartArray.map(el => el)}
      </div>
  </>
  )}

export default CartPage;