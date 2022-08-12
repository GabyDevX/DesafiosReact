import React from 'react'
import { Link } from 'react-router-dom'

function NavBarItem({ title, sectionId }) {
  //Estilos
  const styles = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1.1rem',
  }

  return (
    <Link style={styles} to={sectionId}>
      {title}
    </Link>
  )
}

export default NavBarItem
