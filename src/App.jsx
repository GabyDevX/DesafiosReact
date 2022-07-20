import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const clean = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <NavBar onClick={clean} count={count} />
      <ItemListContainer onClick={increment} titulo="Speakers Ramirez" />
    </div>
  )
}

export default App
