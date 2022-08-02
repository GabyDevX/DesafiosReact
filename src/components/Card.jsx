import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Card({ product, onClick }) {
  const [stock, setStock] = useState(product.stockDisponible)
  const [cantidad, setCantidad] = useState(1)

  const cambiarStock = () => {
    const number = Number(cantidad)
    setStock(stock - cantidad)
    onClick(number)
    setCantidad(0)
  }
  const bajarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }
  const subirCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }
  const añadirStock = () => {
    setStock(stock + 20)
  }
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
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '60%',
    cursor: 'pointer',
  }
  const styleButtonAñadir = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#427da7',
    color: '#fff',
    width: '60%',
    fontSize: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
  }
  const styleCantidad = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.2rem 2rem',

    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    marginBottom: '1rem',
    gap: '1rem',
  }
  const styleClick = {
    cursor: 'pointer',
    margin: 0,
  }
  const styleLink = {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={styles}>
      <Link style={styleLink} to={'/producto/' + product.id}>
        <img src={`/${product.placeHolder}`} style={styleImage} alt="" />
      </Link>
      <h3>{product.nombre}</h3>
      {/* <p>{product.descripcion}</p> */}
      <h4>${product.precio}</h4>
      <p>Stock: {stock}</p>
      <div style={styleCantidad}>
        <p style={styleClick} onClick={bajarCantidad}>
          -
        </p>
        <p style={{ margin: 0 }}>{cantidad}</p>
        <p style={styleClick} onClick={subirCantidad}>
          +
        </p>
      </div>
      <button onClick={añadirStock} style={styleButtonAñadir}>
        Añadir Stock
      </button>
      <button onClick={cambiarStock} style={styleButton}>
        Comprar
      </button>
    </div>
  )
}

export default Card
