import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchResultContainer from './components/SearchResultContainer'
// import Api from '../utils/Api'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <SearchResultContainer />
    </>
  )
}

export default App
