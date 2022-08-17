import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextData from './context/ContextData'
import Checkout from './components/Checkout'

function App() {
  return (
    <ContextData>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer titulo="Speakers Ramirez" />}
          />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer titulo="Speakers Ramirez" />}
          />
          <Route
            path="/producto/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/finalizar" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ContextData>
  )
}

export default App
