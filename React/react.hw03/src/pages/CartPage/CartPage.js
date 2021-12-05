import React from "react";
import CartProducts from "../../components/CartProducts";

const CartPage = ({ cart, openModal }) => {

  return (
    <>
      <h1>CART</h1>
      <div>
        {cart.map(element => {
          return <CartProducts openModal={openModal} count={element.count} name={element.name}/>
        })}
      </div>
    </>
  )
}

export default CartPage;