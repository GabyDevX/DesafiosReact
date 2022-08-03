import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function Card({ product }) {
  const styles = {
    backgroundColor: '#fff',
    padding: '.5rem',
    height: 'auto',
    width: 250,
    borderRadius: 6,
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '15px',
  }
  const styleImage = {
    height: 'auto',
    width: 100,
  }
  const styleLink = {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const styleDetalle = {
    width: '100%',
    margin: '1rem 0',
    padding: '0 2rem',
    textAlign: 'center',
    borderRadius: 6,
    border: 'none',
    backgroundColor: '#fff',
    color: '#427da7',
  }
  return (
    <div style={styles}>
      <Link style={styleLink} to={'/producto/' + product.id}>
        <img src={`/${product.placeHolder}`} style={styleImage} alt="" />
      </Link>
      <h3>{product.nombre}</h3>
      <h4>${product.precio}</h4>
      <Link to={'/producto/' + product.id}>
        <button style={styleDetalle}>Detalles</button>
      </Link>
    </div>
  )
}

export default Card
