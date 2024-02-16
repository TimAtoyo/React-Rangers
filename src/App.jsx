import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Filters from './components/Filters'

const router = createBrowserRouter([
  { element:<Navbar />,
    children: [
      {
      path: '/', 
      element: <Home />,}
      ,
      {
      path: '/Filters', 
      element: <Filters />,}

    ]
  }

])

function App() {
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
