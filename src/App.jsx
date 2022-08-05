import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextData from './context/ContextData'

function App() {
  const [count, setCount] = useState(0)
  const increment = (value) => {
    setCount(count + value)
  }
  return (
    <ContextData>
      <BrowserRouter>
        <NavBar count={count} />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                onClick={increment}
                titulo="Speakers Ramirez"
              />
            }
          />
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer
                onClick={increment}
                titulo="Speakers Ramirez"
              />
            }
          />
          <Route
            path="/producto/:idProducto"
            element={<ItemDetailContainer onClick={increment} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ContextData>
  )
}

export default App
