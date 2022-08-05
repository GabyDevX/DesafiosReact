import React, { useContext, useEffect, useState } from 'react'
import cartIcon from '../cartIcon.png'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

function CartWidget() {
  const { cart } = useContext(MyContext)
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(cart.length)
  }, [cart])

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
        <img src={cartIcon} alt="logo" style={cartIconStyle} />
        <p>{count}</p>
      </div>
    </Link>
  )
}

export default CartWidget
