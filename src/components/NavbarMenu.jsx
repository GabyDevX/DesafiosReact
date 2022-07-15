import React from 'react'
import NavBarItem from './NavBarItem'

function NavbarMenu() {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  }

  return (
    <div style={styles}>
      <NavBarItem />
      <NavBarItem />
      <NavBarItem />
      <NavBarItem />
    </div>
  )
}

export default NavbarMenu
