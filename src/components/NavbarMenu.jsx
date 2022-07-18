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
      <NavBarItem sectionId="#seccion1" title="Section 1" />
      <NavBarItem sectionId="#seccion2" title="Section 2" />
      <NavBarItem sectionId="#seccion3" title="Section 3" />
      <NavBarItem sectionId="#seccion4" title="Section 4" />
    </div>
  )
}

export default NavbarMenu
