import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/appLayouts'
import { AuthLayout } from './layouts/authLayout'
import { Dashboard } from './pages/app/dasboard'
import { Signin } from './pages/auth/signin'
import { Signup } from './pages/auth/signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <Signin /> },
      { path: '/sign-up', element: <Signup /> },
    ],
  },
])
