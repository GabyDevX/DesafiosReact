import React from 'react'
import CartWidget from './CartWidget'
import NavbarMenu from './NavbarMenu'

function NavBar({ count, onClick }) {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    position: 'fixed',
    padding: '1rem',
    zIndex: '10',
  }

  return (
    <div style={styles}>
      <h2>Speakers R</h2>
      <NavbarMenu />
      <CartWidget onClick={onClick} count={count} />
    </div>
  )
}

export default NavBar
