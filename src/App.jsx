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
      // element: < />,}

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
