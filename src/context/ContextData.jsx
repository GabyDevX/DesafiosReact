import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState('Hola desde context!')
  return (
    <MyContext.Provider value={{ cart, setCart }}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextData
