import React, { useContext } from 'react'
import { MyContext } from '../context/ContextData'

const Cart = () => {
  const { cart } = useContext(MyContext)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {cart}
    </div>
  )
}

export default Cart
