import React from 'react'

function Card({ nombre, descripcion, precio, placeHolderImg, onClick }) {
  const styles = {
    backgroundColor: '#fff',
    padding: '.5rem',
    height: 'auto',
    width: 300,
    borderRadius: 6,
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  const styleImage = {
    height: 'auto',
    width: 200,
  }
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '60%',
  }
  return (
    <div style={styles}>
      <img src={placeHolderImg} style={styleImage} alt="" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h4>${precio}</h4>
      <button onClick={onClick} style={styleButton}>
        Comprar
      </button>
    </div>
  )
}

export default Card
