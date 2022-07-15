import React from 'react'
import placeHolder from '../placeHolder.png'

function Card({ nombre, descripcion, precio }) {
  const styles = {
    backgroundColor: 'grey',
    padding: '.5rem',
    height: 'auto',
    width: 'auto',
  }
  const styleImage = {
    height: 100,
    width: 'auto',
  }
  return (
    <div style={styles}>
      <img src={placeHolder} style={styleImage} alt="" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h4>${precio}</h4>
    </div>
  )
}

export default Card
