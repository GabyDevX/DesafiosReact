import React, { useState, useEffect } from 'react'
import CardSection from './CardSection'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'

function ItemListContainer({ title }) {
  //States
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()

  //Styles
  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }

  //Logic to load all the products or products by category using the URL param
  useEffect(() => {
    setLoading(true)
    setProducts([])

    const db = getFirestore()

    const itemCollection = collection(db, 'productos')
    const collectionFiltered = query(
      collection(db, 'productos'),
      where('idCategoria', '==', `${idCategory}`),
    )

    getDocs(!idCategory ? itemCollection : collectionFiltered)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [idCategory])

  return (
    <div style={styles}>
      {error ? <h1>We couldn't find any products'</h1> : <h1>{title}</h1>}
      <CardSection
        products={products}
        section={
          idCategory
            ? idCategory.toUpperCase() + ' ' + 'Speakers'
            : 'Our Speakers'
        }
      />
      <Loader loading={loading} />
    </div>
  )
}

export default ItemListContainer
