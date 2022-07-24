import React, { useState } from 'react'
import CardSection from './CardSection'

function ItemListContainer({ titulo, onClick }) {
  const [products, setProducts] = useState([])
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

  setTimeout(() => {
    setProducts([
      {
        id: 1,
        nombre: 'JBL Charge 5',
        descripcion:
          'Altavoz portátil resistente al agua con batería integrada',
        precio: 200,
        stockDisponible: 20,
        placeHolder: './src/placeHolder.png',
      },
      {
        id: 2,
        nombre: 'JBL Go 2',
        descripcion: 'Altavoz Bluetooth portátil',
        precio: 100,
        stockDisponible: 10,
        placeHolder: './src/placeHolder2.png',
      },
      {
        id: 3,
        nombre: 'JBL Partybox 310',
        descripcion: 'Altavoz portátil para fiestas con iluminación',
        precio: 170,
        stockDisponible: 13,
        placeHolder: './src/placeHolder3.png',
      },
      {
        id: 1,
        nombre: 'JBL Charge 5',
        descripcion:
          'Altavoz portátil resistente al agua con batería integrada',
        precio: 200,
        stockDisponible: 20,
        placeHolder: './src/placeHolder.png',
      },
      {
        id: 2,
        nombre: 'JBL Go 2',
        descripcion: 'Altavoz Bluetooth portátil',
        precio: 100,
        stockDisponible: 10,
        placeHolder: './src/placeHolder2.png',
      },
      {
        id: 1,
        nombre: 'JBL Charge 5',
        descripcion:
          'Altavoz portátil resistente al agua con batería integrada',
        precio: 200,
        stockDisponible: 20,
        placeHolder: './src/placeHolder.png',
      },
      {
        id: 2,
        nombre: 'JBL Go 2',
        descripcion: 'Altavoz Bluetooth portátil',
        precio: 100,
        stockDisponible: 10,
        placeHolder: './src/placeHolder2.png',
      },
      {
        id: 3,
        nombre: 'JBL Partybox 310',
        descripcion: 'Altavoz portátil para fiestas con iluminación',
        precio: 170,
        stockDisponible: 13,
        placeHolder: './src/placeHolder3.png',
      },
    ])
  }, 2000)

  console.log(products)

  return (
    <div style={styles}>
      <h1>{titulo}</h1>
      <CardSection
        products={products}
        onClick={onClick}
        sectionId="seccion1"
        seccion="Section 1"
      />
      {/* <CardSection
        product={products}
        onClick={onClick}
        sectionId="seccion2"
        seccion="Section 2"
      />
      <CardSection
        product={products}
        onClick={onClick}
        sectionId="seccion3"
        seccion="Section 3"
      />
      <CardSection
        product={products}
        onClick={onClick}
        sectionId="seccion4"
        seccion="Section 4"
      /> */}
    </div>
  )
}

export default ItemListContainer
