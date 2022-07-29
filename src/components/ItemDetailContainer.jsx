import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer({ onClick }) {
  const [product, setProduct] = useState({})
  const [error, setError] = useState(false)
  const { idProducto } = useParams()
  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '7rem',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }
  useEffect(() => {
    let productos = [
      {
        id: 1,
        nombre: 'JBL Charge 5',
        descripcion:
          'Altavoz portátil resistente al agua con batería integrada',
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
        descripcion:
          'Altavoz portátil resistente al agua con batería integrada',
        precio: 200,
        stockDisponible: 20,
        placeHolder: './src/placeHolder.png',
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
        descripcion:
          'Parlante Bluetooth Sony Srs-xb12 Parlantes Portátiles Prof',
        precio: 68,
        stockDisponible: 10,
        placeHolder: './src/Sony4.png',
        idCategoria: 'sony',
      },
    ]

    console.log(idProducto)

    const myPromise = new Promise((resolve, reject) => {
      resolve(productos.find((e) => e.id == idProducto))
    })

    myPromise
      .then((response) => {
        setProduct(response)
      })
      .catch((error) => {
        setError(true)
      })
  }, [idProducto])

  return (
    <div style={styles}>
      {/* <h1>{product.idCategoria} Speaker</h1> */}
      <ItemDetail onClick={onClick} producto={product} />
    </div>
  )
}

export default ItemDetailContainer
