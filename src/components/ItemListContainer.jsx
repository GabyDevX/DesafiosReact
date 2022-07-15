import React from 'react'
import CardSection from './CardSection'

function ItemListContainer({ titulo }) {
  const styles = {
    backgroundColor: '#0b0b0b',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '5rem',
    paddingBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }

  return (
    <div style={styles}>
      <h1>{titulo}</h1>
      <CardSection seccion="Section 1" />
      <CardSection seccion="Section 2" />
      <CardSection seccion="Section 3" />
    </div>
  )
}

export default ItemListContainer
