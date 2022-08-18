import React, { useState, useContext } from 'react'
import {
  addDoc,
  getFirestore,
  collection,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { MyContext } from '../context/ContextData'
import moment from 'moment'
import Swal from 'sweetalert2'

const Checkout = () => {
  //Context data y estados
  const { cart, total, clear } = useContext(MyContext)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [orderDocId, setOrderDocId] = useState('')

  //Funcion para finalizar la compra
  const finalizarCompra = () => {
    //Expresiones regulares para las restricciones del formulario
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regexTelefono = /^[0-9]+$/

    //Restricciones del formulario

    //Campos vacíos
    if (email === '' || phone === '' || name === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Los campos no pueden estar vacios',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Numero de telefono correcto
    if (phone !== '' && !regexTelefono.test(phone)) {
      Swal.fire({
        title: 'Error!',
        text: 'Ingrese un número de telefono válido',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Direccion de email correcto
    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Ingrese un email válido',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Alerta en caso de éxito
    Swal.fire({
      title: 'Exito!',
      text: 'Ha realizado exitosamente su compra',
      icon: 'success',
      confirmButtonText: 'Continuar',
    })

    //Documento para enviar a Firestore
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

    //Firestore comandos para subir documento(orden de compra) y actualizar stock de documentos(productos)
    const db = getFirestore()

    const refCollection = collection(db, 'orders')

    addDoc(refCollection, order).then((res) => {
      setOrderDocId(res.id)
      cart.forEach((product) =>
        updateDoc(doc(db, 'productos', product.id), {
          stock: product.stock - product.quantity,
        }),
      )
      clear()
    })
  }
  //Estilos
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
        placeholder="Nombre"
        id=""
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        style={styleInput}
        type="tel"
        name="telefono"
        placeholder="Telefono"
        id=""
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        style={styleInput}
        type="email"
        name="email"
        placeholder="Email"
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
