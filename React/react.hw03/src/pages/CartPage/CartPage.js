import React from "react";
import CartProducts from "../../components/CartProducts";

const CartPage = ({ cart, openModal, products }) => {

  return (
    <>
      <h1>CART</h1>
      <div>
        {cart.map(element => {
          return <CartProducts openModal={openModal} count={element.count} code={element.code}
                               name={() => {products.map(el => {
              if (el.code === cart.code) {
                console.log(el.name)
                return el.name
              }
            })
          }}
          />
        })}
      </div>
    </>
  )
}

export default CartPage;