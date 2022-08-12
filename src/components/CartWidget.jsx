import React, { useContext } from 'react'
import cartIcon from '../cartIcon.png'
import cartIconEmpty from '../cartIconEmpty.png'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

function CartWidget() {
  //Context data de la cantidad de articulos en el carrito
  const { count } = useContext(MyContext)
  //Estilos
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    gap: '.5rem',
  }
  const cartIconStyle = {
    height: 40,
    width: 'auto',
    cursor: 'pointer',
  }
  const styleLink = {
    textDecoration: 'none',
    color: '#000',
  }

  return (
    <Link to={'/cart'} style={styleLink}>
      <div style={styles}>
        <img
          // El icono varía de si hay elementos en el carrito o no
          src={count > 0 ? cartIcon : cartIconEmpty}
          alt="logo"
          style={cartIconStyle}
        />
        <p>{count > 0 ? count : ' '}</p>
      </div>
    </Link>
  )
}

export default CartWidget
