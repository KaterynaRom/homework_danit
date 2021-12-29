import React from 'react';
import styles from './CartPage.module.scss';
import CartProduct from "../../components/CartProduct";
import {shallowEqual, useSelector} from "react-redux";
import SignInForm from "../../components/SignInForm/SignInForm";

const CartPage = () => {
  const cart = useSelector((store) => store.cart.cart, shallowEqual);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cart}>
          <h1>CART</h1>
          {cart.length > 0 && cart.map(el => <CartProduct key={el.code} {...el}/>)}
        </div>
        <div className={styles.form}>
          <h1>Form</h1>
          <SignInForm/>
        </div>
      </div>
  </>
  )}

export default CartPage;