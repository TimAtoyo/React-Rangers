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
 feature/Environmentvariable
      // ,
      // {
      // path: '/', 
      // element: < />,}

      ,
      {
      path: '/Filters', 
      element: <Filters />,}
 main

    ]
  }

])

function App() {
  return (
    <main className='mx-auto'>
    <RouterProvider router={router} />
  </main>
  )
}

export default App
