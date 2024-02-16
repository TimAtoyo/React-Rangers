import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'


const router = createBrowserRouter([
  { element:<Navbar />,
    children: [
      {
      path: '/', 
      element: <Home />,}
      // ,
      // {
      // path: '/', 
      // element: <Home />,}

    ]
  }

])

import Filters from './components/Filters'

function App() {
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
