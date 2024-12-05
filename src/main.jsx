import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes.jsx';

import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)