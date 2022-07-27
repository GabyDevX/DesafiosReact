import React, { useState, useEffect } from 'react'
import CardSection from './CardSection'

function ItemListContainer({ titulo, onClick }) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '5rem',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }
  const productos = [
    {
      id: 1,
      nombre: 'JBL Charge 5',
      descripcion: 'Altavoz portátil resistente al agua con batería integrada',
      precio: 200,
      stockDisponible: 20,
      placeHolder: './src/placeHolder.png',
    },
    {
      id: 2,
      nombre: 'JBL Go 2',
      descripcion: 'Altavoz Bluetooth portátil',
      precio: 100,
      stockDisponible: 10,
      placeHolder: './src/placeHolder2.png',
    },
    {
      id: 3,
      nombre: 'JBL Partybox 310',
      descripcion: 'Altavoz portátil para fiestas con iluminación',
      precio: 170,
      stockDisponible: 13,
      placeHolder: './src/placeHolder3.png',
    },
    {
      id: 4,
      nombre: 'JBL Charge 5',
      descripcion: 'Altavoz portátil resistente al agua con batería integrada',
      precio: 200,
      stockDisponible: 20,
      placeHolder: './src/placeHolder.png',
    },
  ]

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 3000)
  })

  useEffect(() => {
    myPromise
      .then((response) => {
        setProducts(response)
      })
      .catch((error) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div style={styles}>
      {error ? <h1>No se encontraron los productos</h1> : <h1>{titulo}</h1>}
      <CardSection
        products={products}
        onClick={onClick}
        sectionId="seccion1"
        seccion={loading ? 'loading' : 'JBL Speakers'}
      />
      <CardSection
        products={products}
        onClick={onClick}
        sectionId="seccion2"
        seccion={loading ? 'loading' : 'Sony Speakers'}
      />
    </div>
  )
}

export default ItemListContainer
