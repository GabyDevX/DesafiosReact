import React, { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

const ItemDetail = ({ product }) => {
  //Context data
  const { addItem } = useContext(MyContext)

  //State
  const [bought, setBought] = useState(false)

  //We reset the state every time the product is changed
  useEffect(() => {
    setBought(false)
  }, [product])

  const onAdd = (quantity) => {
    setBought(true)
    addItem(product, quantity)
  }

  //Styles
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
      {product === undefined ? (
        <h1>The product doesn't exist'</h1>
      ) : (
        <div style={styles}>
          <img src={`${product.imagen}`} style={styleImage} alt="" />
          <div style={styleDetails}>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion + ' ' + product.nombre}</p>
            <h4>Price: U$S {product.precio}</h4>
            <p>Store guarantee: 1 month</p>
            <p>Manufacturer guarantee: 2 years</p>
            {!bought ? (
              <ItemCount product={product} onClick={onAdd} />
            ) : (
              <Link to={'/cart'}>
                <button style={styleButton}>Buy now!</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemDetail
