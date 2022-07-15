import React from 'react'
import logo from '../logo.svg'

function CartWidget() {
  const styles = {
    height: 60,
    width: 'auto',
  }
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" style={styles} />
    </div>
  )
}

export default CartWidget
