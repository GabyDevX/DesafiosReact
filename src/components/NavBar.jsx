import React from 'react'
import CartWidget from './CartWidget'
import NavbarMenu from './NavbarMenu'
import { Link } from 'react-router-dom'

function NavBar() {
  //Styles
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    padding: '1rem',
    zIndex: '10',
    height: '5rem',
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
      <CartWidget />
    </div>
  )
}

export default NavBar
