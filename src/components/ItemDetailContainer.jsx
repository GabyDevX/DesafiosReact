import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'

function ItemDetailContainer({ onClick }) {
  const [product, setProduct] = useState({})
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
    const myPromise = new Promise((resolve, reject) => {
      resolve(data.find((e) => e.id == idProducto))
    })

    myPromise.then((response) => {
      setProduct(response)
    })
  }, [idProducto])

  return (
    <div style={styles}>
      <ItemDetail onClick={onClick} producto={product} />
    </div>
  )
}

export default ItemDetailContainer
