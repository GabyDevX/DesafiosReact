import React from 'react'
import CardSection from './CardSection'

function ItemListContainer({ titulo, onClick }) {
  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '5rem',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }

  return (
    <div style={styles}>
      <h1>{titulo}</h1>
      <CardSection onClick={onClick} sectionId="seccion1" seccion="Section 1" />
      <CardSection onClick={onClick} sectionId="seccion2" seccion="Section 2" />
      <CardSection onClick={onClick} sectionId="seccion3" seccion="Section 3" />
      <CardSection onClick={onClick} sectionId="seccion4" seccion="Section 4" />
    </div>
  )
}

export default ItemListContainer
