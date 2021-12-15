import React from 'react';
import styles from './CartPage.module.scss';
import CartProduct from "../../components/CartProduct";
import {shallowEqual, useSelector} from "react-redux";

const CartPage = () => {
  const cart = useSelector((store) => store.cart.cart, shallowEqual);

  return (
    <>
      <div className={styles.wrapper}>
      <h1>CART</h1>
        {cart.length > 0 && cart.map(el => <CartProduct key={el.code} {...el}/>)}
      </div>
  </>
  )}

export default CartPage;