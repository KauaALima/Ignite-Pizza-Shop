import './index.css'
import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-theme">
      <RouterProvider router={router} />
      <Toaster richColors />
    </ThemeProvider>
  </StrictMode>,
)
