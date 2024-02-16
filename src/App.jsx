import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchResultContainer from './components/SearchResultContainer'
// import Api from '../utils/Api'
import Filters from './components/Filters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <SearchResultContainer />
    <Filters />
    </>
  )
}

export default App
