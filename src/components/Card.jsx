import React, { useState } from 'react'
import placeHolder from '../placeHolder.png'

function Card({
  nombre,
  descripcion,
  precio,
  placeHolderImg,
  onClick,
  stockDisponible,
}) {
  const [stock, setStock] = useState(stockDisponible)
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
  console.log(placeHolderImg)
  return (
    <div style={styles}>
      <img src={placeHolderImg} style={styleImage} alt="" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h4>${precio}</h4>
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
