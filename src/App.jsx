import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchResultContainer from './components/SearchResultContainer'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Navbar />, 
    children: [
      {
        path: '/', 
      element:  <SearchResultContainer />,
    }
    // ,
    //   {path: '/filter', 
    //   element:  <SearchByFilter />,
    // }
    ]
  }
])

function App() {



  return (
    <main>
    <RouterProvider router = {router} />
    </main>
  )
}

export default App
