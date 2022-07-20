import React from 'react'
import cartIcon from '../cartIcon.png'

function CartWidget({ count, onClick }) {
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
      <img onClick={onClick} src={cartIcon} alt="logo" style={cartIconStyle} />
      <p>{count}</p>
    </div>
  )
}

export default CartWidget
