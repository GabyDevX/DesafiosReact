import React, { useContext } from 'react'
import cartIcon from '../assets/cartIcon.png'
import cartIconEmpty from '../assets/cartIconEmpty.png'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

function CartWidget() {
  //Context data
  const { count } = useContext(MyContext)
  //Styles
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
          //The icon is diferent if the cart if empty or not
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
