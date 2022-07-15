import React from 'react'
import CartWidget from './CartWidget'
import NavbarMenu from './NavbarMenu'

function NavBar() {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    position: 'fixed',
    padding: '1rem',
  }

  return (
    <div style={styles}>
      <NavbarMenu />
      <CartWidget />
    </div>
  )
}

export default NavBar
