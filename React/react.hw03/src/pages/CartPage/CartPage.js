import React from "react";
import CartProducts from "../../components/CartProducts";

const CartPage = ({ cart, openModal, products }) => {
  const cartArr = cart.map()
  return (
    <>
      <h1>CART</h1>

      <div>
        {products.map( prod => )}
      </div>
      {/*<div>*/}
      {/*  {products.map(element =>  true) }*/}
          {/*// return <CartProducts openModal={openModal} count={element.count} code={element.code}*/}
          {/*//                      name={products.filter(el => cart.includes(el.code))}/>*/}
      {/*</div>*/}
  </>
  )
}

export default CartPage;