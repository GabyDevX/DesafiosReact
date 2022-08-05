import React, { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

const ItemDetail = ({ producto, onClick }) => {
  const { setProducts, setCart, cart } = useContext(MyContext)
  const [comprado, setComprado] = useState(true)
  useEffect(() => {
    setComprado(true)
  }, [producto])

  const onAdd = () => {
    setComprado(false)
    setCart([producto])
    onClick(+1)
  }
  const styles = {
    backgroundColor: '#fff',
    padding: '.5rem',
    minHeight: '100vh',
    width: '100%',
    borderRadius: 6,
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '15px',
  }
  const styleDetails = {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  }
  const styleImage = {
    height: 'auto',
    width: '30%',
  }
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '100%',
    cursor: 'pointer',
  }
  return (
    <div style={styles}>
      <img src={`/${producto.placeHolder}`} style={styleImage} alt="" />
      <div style={styleDetails}>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion + ' ' + producto.nombre}</p>
        <h4>Precio: ${producto.precio}</h4>
        {comprado ? (
          <ItemCount producto={producto} onClick={onAdd} />
        ) : (
          <Link to={'/cart'}>
            <button style={styleButton}>Comprar Ahora</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
