import React from 'react'
import cartIcon from '../cartIcon.png'

function CartWidget() {
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

  return (
    <div style={styles}>
      <img src={cartIcon} alt="logo" style={cartIconStyle} />
      <p>0</p>
    </div>
  )
}

export default CartWidget
