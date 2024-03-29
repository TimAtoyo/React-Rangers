
import Home from "./components/Home";
import Footer from "./components/Footer";
import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import FiltersForm from './components/filters/FiltersForm'
import MovieDetailsResult from './components/movie-details/MovieDetailsResult'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <MovieDetailsResult />,
      },
      {
        path: "/Filters",
        element: <FiltersForm />,

      },
    ],
    
  }
  
]);

function App() {
  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
    <main className='mx-auto h-100'>
    <RouterProvider router={router} />
    <Footer/>
  </main>
  </QueryClientProvider>
  )
}

export default App;
