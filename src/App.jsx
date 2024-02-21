import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Home from './components/Home'
import FiltersForm from './components/FiltersForm'
import MovieDetailsResult from './components/MovieDetailsResult'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

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
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <main className='mx-auto h-100 pb-48'>
    <RouterProvider router={router} />
  </main>
  </QueryClientProvider>
  )
}

export default App
