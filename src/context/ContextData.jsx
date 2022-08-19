import React, { createContext, useState, useEffect } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  //If there's data in the localStorage we load the data from them
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      setCount(cartLenght(JSON.parse(localStorage.getItem('cart'))))
    }
  }, [])

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      cart.find((e) => e.id === item.id).quantity += quantity
      setCart(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
      setCount(cartLenght(cart))
    } else {
      const newItem = item
      newItem.quantity = quantity
      cart.push(newItem)
      setCart(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
      setCount(cartLenght(cart))
    }
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.id !== itemId)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCount(cartLenght(newCart))
  }

  const clear = () => {
    setCart([])
    setCount(0)
    localStorage.setItem('cart', JSON.stringify([]))
  }

  const isInCart = (id) => {
    if (cart.find((item) => item.id === id) === undefined) {
      return false
    } else {
      return true
    }
  }

  const cartLenght = (arr) => {
    return arr.reduce((sum, item) => sum + item.quantity, 0)
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
