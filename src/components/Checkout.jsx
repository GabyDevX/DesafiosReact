import React, { useState, useContext } from 'react'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { MyContext } from '../context/ContextData'
import moment from 'moment'

const Checkout = () => {
  const { cart, total, clear } = useContext(MyContext)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [orderDocId, setOrderDocId] = useState('')
  const finalizarCompra = () => {
    const order = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart,
      date: moment().format('DD-MM-YYYY hh:mm:ss'),
      total: total,
    }

    const db = getFirestore()

    const refCollection = collection(db, 'orders')

    addDoc(refCollection, order).then((res) => {
      setOrderDocId(res.id)
      clear()
    })
  }
  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    paddingTop: '4rem',
    display: 'flex',
    flexDirection: 'Column',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '1rem',
    alignItems: 'center',
    minHeight: 'calc(100vh - 5rem)',
  }
  const styleInput = { width: '50%' }
  const styleComprar = {
    width: '30%',
    margin: '1rem 0',
    padding: '0 2rem',
    textAlign: 'center',
    borderRadius: 6,
    border: 'none',
    backgroundColor: '#fff',
    color: '#427da7',
  }
  return (
    <div style={styles}>
      <input
        style={styleInput}
        type="text"
        name="nombre"
        id=""
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        style={styleInput}
        type="tel"
        name="telefono"
        id=""
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        style={styleInput}
        type="email"
        name="email"
        id=""
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button style={styleComprar} onClick={finalizarCompra}>
        Finalizar compra
      </button>
      <h1>
        {orderDocId != '' ? 'Order Id:' : ''} {orderDocId}
      </h1>
    </div>
  )
}

export default Checkout
