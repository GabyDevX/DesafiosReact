import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState([])
  const [productsData, setProductsData] = useState([])
  const data = [
    {
      id: 1,
      nombre: 'JBL Charge 5',
      descripcion: 'Altavoz portátil resistente al agua con batería integrada',
      precio: 200,
      stockDisponible: 20,
      placeHolder: './src/placeHolder.png',
      idCategoria: 'jbl',
    },
    {
      id: 2,
      nombre: 'JBL Go 2',
      descripcion: 'Altavoz Bluetooth portátil',
      precio: 100,
      stockDisponible: 10,
      placeHolder: './src/placeHolder2.png',
      idCategoria: 'jbl',
    },
    {
      id: 3,
      nombre: 'JBL Partybox 310',
      descripcion: 'Altavoz portátil para fiestas con iluminación',
      precio: 170,
      stockDisponible: 13,
      placeHolder: './src/placeHolder3.png',
      idCategoria: 'jbl',
    },
    {
      id: 4,
      nombre: 'JBL Charge 5',
      descripcion: 'Altavoz portátil resistente al agua con batería integrada',
      precio: 200,
      stockDisponible: 20,
      placeHolder: './src/placeHolder4.png',
      idCategoria: 'jbl',
    },
    {
      id: 5,
      nombre: 'Sony XB33',
      descripcion:
        'Parlante Sony Extra Bass XB33 SRS-XB33 portátil con bluetooth negro',
      precio: 200,
      stockDisponible: 20,
      placeHolder: './src/Sony1.png',
      idCategoria: 'sony',
    },
    {
      id: 6,
      nombre: 'Sony XB23',
      descripcion:
        'Parlante Sony Extra Bass XB23 SRS-XB23 portátil con bluetooth azul',
      precio: 120,
      stockDisponible: 10,
      placeHolder: './src/Sony2.png',
      idCategoria: 'sony',
    },
    {
      id: 7,
      nombre: 'Sony XB13',
      descripcion:
        'Parlante Sony Extra Bass XB13 SRS-XB13 portátil con bluetooth',
      precio: 68,
      stockDisponible: 10,
      placeHolder: './src/Sony3.png',
      idCategoria: 'sony',
    },
    {
      id: 8,
      nombre: 'Sony XB12',
      descripcion: 'Parlante Bluetooth Sony Srs-xb12 Parlantes Portátiles Prof',
      precio: 63,
      stockDisponible: 10,
      placeHolder: './src/Sony4.png',
      idCategoria: 'sony',
    },
    {
      id: 9,
      nombre: 'Mi Pocket',
      descripcion: 'Parlante Xiaomi Mi Pocket Speaker 2 Bluetooth Dimm',
      precio: 80,
      stockDisponible: 18,
      placeHolder: './src/Mi1.png',
      idCategoria: 'mi',
    },
    {
      id: 10,
      nombre: 'Mi Compact',
      descripcion:
        'Parlante Xiaomi Mi Compact Speaker 2 Portatil Bluetooth Dimm',
      precio: 49,
      stockDisponible: 3,
      placeHolder: './src/Mi2.png',
      idCategoria: 'mi',
    },
    {
      id: 11,
      nombre: 'Mi Mini',
      descripcion:
        'Parlante Xiaomi Bluetooth Speaker Mini XMYX04WM portátil negro',
      precio: 58,
      stockDisponible: 25,
      placeHolder: './src/Mi3.png',
      idCategoria: 'mi',
    },
    {
      id: 12,
      nombre: 'Mi Portable',
      descripcion: 'Parlante Xiaomi Portátil Mi Portable Bluetooth 16w',
      precio: 76,
      stockDisponible: 12,
      placeHolder: './src/Mi4.png',
      idCategoria: 'mi',
    },
  ]

  useEffect(() => {
    setProductsData(data)
  }, [])
  return (
    <MyContext.Provider value={{ cart, setCart, productsData }}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextData
