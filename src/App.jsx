import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SingleCard from './components/SingleCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar />
  <SingleCard />
    </>
  )
}

export default App
