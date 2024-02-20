import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Filters from './components/Filters'
import Genres from './components/Genres'
import MoviesByGenres from './components/MoviesByGenres'
import FiltersForm from './components/FiltersForm'
import MovieDetails from './components/MovieDetails'
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
