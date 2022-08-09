import React, { useState, useEffect, useContext } from 'react'
import CardSection from './CardSection'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/ContextData'
import '../css/ItemListContainer.css'

function ItemListContainer({ titulo }) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()
  const { productsData } = useContext(MyContext)

  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }
  const stylesLoading = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  useEffect(() => {
    setLoading(true)
    setProducts([])

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!idCategoria) {
          resolve(productsData)
        } else {
          resolve(
            productsData.filter(
              (p) => p.idCategoria === idCategoria.toLowerCase(),
            ),
          )
        }
      }, 2000)
    })

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
  }, [idCategoria, productsData])

  return (
    <div style={styles}>
      {error ? <h1>No se encontraron los productos</h1> : <h1>{titulo}</h1>}
      <CardSection
        products={products}
        seccion={
          loading ? (
            <div style={stylesLoading}>
              <span className="loader"></span>
            </div>
          ) : idCategoria ? (
            idCategoria.toUpperCase() + ' ' + 'Speakers'
          ) : (
            'Nuestros Speakers'
          )
        }
      />
    </div>
  )
}

export default ItemListContainer
