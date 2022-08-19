import React from 'react'
import { Link } from 'react-router-dom'

function Card({ product }) {
  //Styles
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
  const styleDetail = {
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
      <Link style={styleLink} to={'/product/' + product.id}>
        <img src={`${product.imagen}`} style={styleImage} alt="" />
      </Link>
      <h3>{product.nombre}</h3>
      <h4>U$S {product.precio}</h4>
      <Link to={'/product/' + product.id}>
        <button style={styleDetail}>Details</button>
      </Link>
    </div>
  )
}

export default Card
