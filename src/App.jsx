import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const increment = (value) => {
    setCount(count + value)
  }
  const clean = () => {
    setCount(0)
  }
  return (
    <>
      <BrowserRouter>
        <NavBar onClick={clean} count={count} />
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
