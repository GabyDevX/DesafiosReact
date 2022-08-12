import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

function CartItem({ product }) {
  //Context data y funcion remover para llamar una funcion dentro del context
  const { removeItem } = useContext(MyContext)
  const remover = () => {
    removeItem(product.id, product.quantity)
  }
  //Estilos
  const styles = {
    border: '1px solid black',
    backgroundColor: '#fff',
    padding: '.5rem',
    height: '8rem',
    width: '80%',
    borderRadius: 6,
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '15px',
    gap: '2rem',
  }
  const styleLink = {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const styleImage = {
    height: 'auto',
    width: 100,
  }
  const styleEliminar = {
    width: '20%',
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
        <img src={`/${product.imagen}`} style={styleImage} alt="" />
      </Link>
      <h3>{product.nombre}</h3>
      <h4>U$S {product.precio}</h4>
      <h2>|</h2>
      <h4>x{product.quantity}</h4>
      <h2>|</h2>
      <h4>U$S {product.precio * product.quantity}</h4>
      <button style={styleEliminar} onClick={remover}>
        Eliminar
      </button>
    </div>
  )
}

export default CartItem
