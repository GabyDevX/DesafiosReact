import React from 'react'
import Card from './Card'

function CardSection({ seccion, sectionId, onClick, products }) {
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
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 7.5px )',
    padding: '1rem',
    borderRadius: 6,
    alignItems: 'stretch',
  }

  return (
    <div id={sectionId} style={stylesGeneral}>
      <h2>{seccion}</h2>
      <div style={styles}>
        {products.map((product, i) => (
          <Card
            key={product.id}
            onClick={onClick}
            placeHolderImg={product.placeHolder}
            nombre={product.nombre}
            descripcion={product.descripcion}
            precio={product.precio}
            stockDisponible={product.stockDisponible}
          />
        ))}
      </div>
    </div>
  )
}

export default CardSection
