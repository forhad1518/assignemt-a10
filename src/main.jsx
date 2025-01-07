import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './components/Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/Route/Router.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import DarkMode from './components/Provider/DarkMode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkMode>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </DarkMode>
  </StrictMode>,
)
