import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, } from 'react-router-dom';
import './index.css'
import {router} from './routes'
import { MovieProvider } from './contexts/MoviesContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
    <RouterProvider router={router}></RouterProvider>
    </MovieProvider>
  </StrictMode>,
)
