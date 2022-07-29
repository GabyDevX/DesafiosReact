import React, { useState } from 'react'

const ItemDetail = ({ producto, onClick }) => {
  const [stock, setStock] = useState(20)
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
    width: '50%',
  }
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '100%',
    cursor: 'pointer',
  }
  const styleButtonAñadir = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#427da7',
    color: '#fff',
    width: '100%',
    fontSize: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
  }
  const styleCantidad = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.2rem 2rem',
    width: '100%',
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
  console.log(producto)
  return (
    <div style={styles}>
      <img src={`/${producto.placeHolder}`} style={styleImage} alt="" />
      <div style={styleDetails}>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion + ' ' + producto.nombre}</p>
        <h4>Precio: ${producto.precio}</h4>
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
    </div>
  )
}

export default ItemDetail
