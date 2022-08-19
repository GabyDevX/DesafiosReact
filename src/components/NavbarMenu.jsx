import React from 'react'
import NavBarItem from './NavBarItem'

function NavbarMenu() {
  //Styles
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
  }

  return (
    <div style={styles}>
      <NavBarItem sectionId="/category/jbl" title="JBL Speakers" />
      |
      <NavBarItem sectionId="/category/sony" title="Sony Speakers" />
      |
      <NavBarItem sectionId="/category/mi" title="Mi Speakers" />
    </div>
  )
}

export default NavbarMenu
