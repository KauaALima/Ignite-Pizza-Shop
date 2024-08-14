import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayouts'
import { AuthLayout } from './layouts/authLayout'
import { Dashboard } from './pages/app/dasboard'
import { Signin } from './pages/auth/signin'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/signin', element: <Signin /> }],
  },
])
