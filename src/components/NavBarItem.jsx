import React from 'react'

function NavBarItem({ title, sectionId }) {
  const styles = {
    textDecoration: 'none',
    color: '#000',
  }

  return (
    <a style={styles} href={sectionId}>
      {title}
    </a>
  )
}

export default NavBarItem
