import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Hero from './components/Hero'; import Home from './components/Home'
import FiltersForm from './components/FiltersForm'
import MovieDetailsResult from './components/MovieDetailsResult'


const router = createBrowserRouter([
  { element:<Navbar />,
    children: [
      {
      path: '/', 
      element: <Home />,}
      ,

          {
      path: '/details/:id', 
      element: <MovieDetailsResult />,}
      ,
      {
      path: '/Filters', 
      element: <FiltersForm />,}


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
