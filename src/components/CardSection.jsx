import React from 'react'
import Card from './Card'
import placeHolder from '../placeHolder.png'
import placeHolder2 from '../placeHolder2.png'
import placeHolder3 from '../placeHolder3.png'

function CardSection({ seccion, sectionId }) {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'Row',
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
    <div style={styles} id={sectionId}>
      <h2>{seccion}</h2>
      <Card
        placeHolderImg={placeHolder}
        nombre="JBL Charge 5"
        descripcion="Altavoz portátil resistente al agua con batería integrada"
        precio="200"
      />
      <Card
        placeHolderImg={placeHolder2}
        nombre="JBL Go 2"
        descripcion="Altavoz Bluetooth portátil"
        precio="100"
      />
      <Card
        placeHolderImg={placeHolder3}
        nombre="JBL Partybox 310"
        descripcion="Altavoz portátil para fiestas con iluminación y el potente sonido JBL Signature"
        precio="170"
      />
    </div>
  )
}

export default CardSection
