import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {
  //Estado
  const [product, setProduct] = useState({})

  //Parametro URL
  const { idProducto } = useParams()

  //Estilos
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

  //Al cargar y cada vez que cambie el id, consultará a la base de datos de firestore
  //Y filtrará para obtener el producto en base al Id
  useEffect(() => {
    const db = getFirestore()
    const response = doc(db, 'productos', `${idProducto}`)
    getDoc(response).then((snapshot) => {
      snapshot.exists() && setProduct({ id: snapshot.id, ...snapshot.data() })
    })
  }, [idProducto])

  return (
    <div style={styles}>
      <ItemDetail producto={product} />
    </div>
  )
}

export default ItemDetailContainer
