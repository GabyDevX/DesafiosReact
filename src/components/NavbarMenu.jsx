import React from 'react'
import NavBarItem from './NavBarItem'

function NavbarMenu() {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
  }

  return (
    <div style={styles}>
      <NavBarItem sectionId="#seccion1" title="JBL Speakers" />
      <NavBarItem sectionId="#seccion2" title="Sony Speakers" />
      <NavBarItem sectionId="#" title="Contacto" />
      {/* <NavBarItem sectionId="#seccion2" title="Section 2" />
      <NavBarItem sectionId="#seccion3" title="Section 3" />
      <NavBarItem sectionId="#seccion4" title="Section 4" /> */}
    </div>
  )
}

export default NavbarMenu
