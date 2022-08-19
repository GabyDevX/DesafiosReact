import React, { useState, useEffect, useContext } from 'react'
import { MyContext } from '../context/ContextData'
import Swal from 'sweetalert2'

export const ItemCount = ({ onClick, product }) => {
  //Context data
  const { cart } = useContext(MyContext)

  //States
  const [stock, setStock] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    //If the product is in the cart, perform the operation to set the available stock
    if (cart.find((item) => item.id === product.id)) {
      const productoCarrito = cart.find((item) => item.id === product.id)
      setStock(product.stock - productoCarrito.quantity)
    } else {
      setStock(product.stock)
    }
  }, [product, cart])

  //We call father component function and change the stock
  const changeStock = () => {
    if (stock > 0) {
      setStock(stock - quantity)
      onClick(quantity)
      setQuantity(0)
    } else {
      Swal.fire('Ups!', "We don't have stock of this product", 'error')
    }
  }

  const quantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const quantityIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }
  //Styles
  const styles = {
    border: '1px solid',
    padding: '1rem',
    borderRadius: 6,
    borderColor: '#39495b',
  }
  const styleButton = {
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    width: '100%',
    cursor: 'pointer',
  }
  const styleQuantity = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.2rem 2rem',
    borderRadius: 6,
    backgroundColor: '#39495b',
    color: '#fff',
    marginBottom: '1rem',
    gap: '1rem',
  }
  const styleClick = {
    cursor: 'pointer',
    margin: 0,
  }
  return (
    <div style={styles}>
      <p>Stock: {stock}</p>
      <div style={styleQuantity}>
        <p style={styleClick} onClick={quantityDecrease}>
          -
        </p>
        <p style={{ margin: 0 }}>{quantity}</p>
        <p style={styleClick} onClick={quantityIncrease}>
          +
        </p>
      </div>
      <button onClick={changeStock} style={styleButton}>
        Add to cart
      </button>
    </div>
  )
}
export default ItemCount
