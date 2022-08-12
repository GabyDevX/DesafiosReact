import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  const addItem = (item, quantity) => {
    //Manejo de stock
    // productsData.find((e) => e.id === item.id).stock -= quantity
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
    //Manejo de stock
    // const newProducts = productsData.filter((e) => e.id !== itemId)
    // const newProduct = productsData.find((e) => e.id === itemId)
    // newProduct.stock += quantity
    // newProducts.push(newProduct)
    // setProductsData(newProducts)
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
      value={{ cart, setCart, addItem, clear, removeItem, count }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default ContextData
