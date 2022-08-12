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

function ItemListContainer({ titulo }) {
  //Estados
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  //Estilos
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

  //Cada vez que cargue o que cambie el id de categoria reiniciara el valor del estado de productos para
  //No duplicar los datos y se inicia el loader cambiando su estado
  //Se conecta con la base de datos y en caso de existir un parametro URL se filtra
  //De no ser asi se reciben todos los datos y se añaden al estado de productos
  useEffect(() => {
    setLoading(true)
    setProducts([])

    const db = getFirestore()

    const itemCollection = collection(db, 'productos')
    const collectionFiltered = query(
      collection(db, 'productos'),
      where('idCategoria', '==', `${idCategoria}`),
    )

    getDocs(!idCategoria ? itemCollection : collectionFiltered)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [idCategoria])

  return (
    <div style={styles}>
      {error ? <h1>No se encontraron los productos</h1> : <h1>{titulo}</h1>}
      <CardSection
        products={products}
        seccion={
          idCategoria
            ? idCategoria.toUpperCase() + ' ' + 'Speakers'
            : 'Nuestros Speakers'
        }
      />
      <Loader loading={loading} />
    </div>
  )
}

export default ItemListContainer
