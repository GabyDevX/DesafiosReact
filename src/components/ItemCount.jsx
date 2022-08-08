import React, { useState, useEffect } from 'react'

export const ItemCount = ({ onClick, producto }) => {
  const [stock, setStock] = useState(0)
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    setStock(producto.stockDisponible)
  }, [producto])

  const cambiarStock = () => {
    setStock(stock - cantidad)
    onClick(cantidad)
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

  const styles = {
    border: '1px solid',
    padding: '1rem',
    borderRadius: 6,
    borderColor: '#39495b',
  }
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '100%',
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
  return (
    <div style={styles}>
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
      <button onClick={cambiarStock} style={styleButton}>
        Añadir al carrito
      </button>
    </div>
  )
}
export default ItemCount
