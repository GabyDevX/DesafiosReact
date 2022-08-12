import React, { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

const ItemDetail = ({ producto }) => {
  //Context data
  const { addItem } = useContext(MyContext)

  //Estado
  const [comprado, setComprado] = useState(false)

  //Cada vez que cambie el producto se reinicia el valor del estado
  useEffect(() => {
    setComprado(false)
  }, [producto])

  //Se cambia el valor del estado para que aparezca un botón que redireccione al carrito
  //Se llama a la funcion del context para añadir el producto y su cantidad al carrito
  const onAdd = (quantity) => {
    setComprado(true)
    addItem(producto, quantity)
  }

  //Estilos
  const styles = {
    backgroundColor: '#fff',
    padding: '.5rem',
    minHeight: '100vh',
    width: '100%',
    borderRadius: 6,
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '15px',
  }
  const styleDetails = {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  }
  const styleImage = {
    height: 'auto',
    width: '30%',
  }
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '100%',
    cursor: 'pointer',
  }
  return (
    <div style={styles}>
      <img src={`/${producto.imagen}`} style={styleImage} alt="" />
      <div style={styleDetails}>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion + ' ' + producto.nombre}</p>
        <h4>Precio: U$S {producto.precio}</h4>
        {!comprado ? (
          <ItemCount producto={producto} onClick={onAdd} />
        ) : (
          <Link to={'/cart'}>
            <button style={styleButton}>Comprar Ahora</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
