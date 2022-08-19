import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {
  //State
  const [product, setProduct] = useState({})

  //URL Param
  const { idProduct } = useParams()

  //Styles
  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }

  //Filter by id to get the product from firestore database
  useEffect(() => {
    const db = getFirestore()
    const response = doc(db, 'productos', `${idProduct}`)
    getDoc(response).then((snapshot) => {
      snapshot.exists()
        ? setProduct({ id: snapshot.id, ...snapshot.data() })
        : setProduct(undefined)
    })
  }, [idProduct])

  return (
    <div style={styles}>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
