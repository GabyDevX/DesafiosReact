import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

function ItemDetailContainer({ onClick }) {
  const [product, setProduct] = useState({})
  const { idProducto } = useParams()
  const { productsData } = useContext(MyContext)
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
    const myPromise = new Promise((resolve, reject) => {
      resolve(productsData.find((e) => e.id == idProducto))
    })

    myPromise.then((response) => {
      console.log(response)
      setProduct(response)
    })
  }, [idProducto])

  console.log(productsData)

  return (
    <div style={styles}>
      <ItemDetail onClick={onClick} producto={product} />
    </div>
  )
}

export default ItemDetailContainer
