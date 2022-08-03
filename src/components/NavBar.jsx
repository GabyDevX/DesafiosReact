import React from 'react'
import CartWidget from './CartWidget'
import NavbarMenu from './NavbarMenu'
import { Link } from 'react-router-dom'

function NavBar({ count }) {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    position: 'fixed',
    padding: '1rem',
    zIndex: '10',
  }

  const styleLink = {
    textDecoration: 'none',
    color: 'inherit',
  }

  return (
    <div style={styles}>
      <Link style={styleLink} to={'/'}>
        <h2>Speakers R</h2>
      </Link>
      <NavbarMenu />
      <CartWidget count={count} />
    </div>
  )
}

export default NavBar
