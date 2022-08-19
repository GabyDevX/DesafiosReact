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
  //Context data and states
  const { cart, total, clear } = useContext(MyContext)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [orderDocId, setOrderDocId] = useState('')
  const [checked, setChecked] = useState(false)

  //Checkout function
  const checkout = () => {
    //REGEX to use in form restrictions
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regexPhone = /^[0-9]+$/

    //Form validation

    //Doesn't admit empty entries
    if (email === '' || phone === '' || name === '' || lastName === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all fields',
        icon: 'error',
        confirmButtonText: 'Continue',
      })
      return
    }

    //Phone number validation
    if (phone !== '' && !regexPhone.test(phone)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid phone number',
        icon: 'error',
        confirmButtonText: 'Continue',
      })
      return
    }

    //Wrong email adress validation
    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address',
        icon: 'error',
        confirmButtonText: 'Continue',
      })
      return
    }

    //Same email adress validation
    if (email !== confirmEmail) {
      Swal.fire({
        title: 'Error!',
        text: "The email adress doesn't match",
        icon: 'error',
        confirmButtonText: 'Continue',
      })
      return
    }

    //If the cart is empty, they can't checkout
    if (cart.length === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'The cart needs at least one item to checkout',
        icon: 'error',
        confirmButtonText: 'Continue',
      })
      return
    }

    //Success alert
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully made your purchase',
      icon: 'success',
      confirmButtonText: 'Continue',
    })

    //Document to upload to firestore
    const order = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart,
      date: moment().format('DD-MM-YYYY hh:mm:ss'),
      status: 'generated',
      total: total,
    }

    //Firestore commands to get the database and upload a firestore document(order) and update the cart documents stock
    const db = getFirestore()

    const refCollection = collection(db, 'orders')

    addDoc(refCollection, order).then((res) => {
      setOrderDocId(res.id)
      setChecked(true)
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
      {checked ? (
        <h1>Thanks for your purchase!</h1>
      ) : (
        <div style={styles}>
          <input
            style={styleInput}
            type="text"
            name="firstName"
            placeholder="First Name"
            id=""
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            style={styleInput}
            type="text"
            name="lastName"
            placeholder="Last Name"
            id=""
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            style={styleInput}
            type="tel"
            name="phone"
            placeholder="Phone Number"
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
          <input
            style={styleInput}
            type="email"
            name="confirmEmail"
            placeholder="Confirm Email"
            id=""
            value={confirmEmail}
            onChange={(event) => setConfirmEmail(event.target.value)}
          />
          <button style={styleComprar} onClick={checkout}>
            Checkout!
          </button>
        </div>
      )}
      <h2>
        {orderDocId != '' ? 'Order Id:' : ''} {orderDocId}
      </h2>
    </div>
  )
}

export default Checkout
