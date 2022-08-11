import React from 'react'
import Card from './Card'

function CardSection({ seccion, products }) {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'Row',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '1rem',
    borderRadius: 6,
    alignItems: 'stretch',
    gap: '2rem',
  }
  const stylesGeneral = {
    display: 'flex',
    flexDirection: 'Column',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '1rem',
    borderRadius: 6,
    alignItems: 'stretch',
  }

  return (
    <div style={stylesGeneral}>
      <h2>{seccion}</h2>
      <div style={styles}>
        {products
          .sort((a, b) => a.precio - b.precio)
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CardSection
