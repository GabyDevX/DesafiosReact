import React from 'react'

function NavBarItem({ title, sectionId }) {
  const styles = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1.1rem',
  }

  return (
    <a style={styles} href={sectionId}>
      {title}
    </a>
  )
}

export default NavBarItem
