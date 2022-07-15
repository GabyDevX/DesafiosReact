import React from 'react'
import Card from './Card'

function CardSection({ seccion }) {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'Row',
    width: '100%',
    justifyContent: 'space-evenly',
  }
  return (
    <div style={styles}>
      <h2>{seccion}</h2>
      <Card nombre="JBL 1" descripcion="Waterproof" precio="200" />
      <Card nombre="JBL 2" descripcion="Waterproof" precio="100" />
      <Card nombre="JBL 3" descripcion="Waterproof" precio="170" />
    </div>
  )
}

export default CardSection
