import React, { createContext, useState, useEffect } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      cart.find((e) => e.id === item.id).quantity += quantity
      setCart(cart)
    } else {
      const newItem = item
      newItem.quantity = quantity
      cart.push(newItem)
      setCart(cart)
      setCount(count + quantity)
    }
  }

  const removeItem = (itemId, quantity) => {
    const newCart = cart.filter((e) => e.id !== itemId)
    setCount(count - quantity)
    setCart(newCart)
  }

  const clear = () => {
    setCart([])
    setCount(0)
  }

  const isInCart = (id) => {
    if (cart.find((item) => item.id === id) === undefined) {
      return false
    } else {
      return true
    }
  }

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        clear,
        removeItem,
        count,
        total,
        setTotal,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default ContextData
