import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/appLayouts'
import { AuthLayout } from './layouts/authLayout'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard/dasboard'
import { Orders } from './pages/app/orders/ordesr'
import { Signin } from './pages/auth/signin'
import { Signup } from './pages/auth/signup'
import { Error } from './pages/erro'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <Signin /> },
      { path: '/sign-up', element: <Signup /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
