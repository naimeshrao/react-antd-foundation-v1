import { createBrowserRouter } from 'react-router-dom'
import Login from '@pages/Auth/Login/Login'
import Dashboard from '@pages/Dashboard/Dashboard'
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout'
import ForgotPassword from '@/pages/Auth/ForgotPassword/ForgotPassword'
import AppLayout from '@/components/Layout/AppLayout/AppLayout'
import PageNotFound from '@/pages/PageNotFound/PageNotFound'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      }
    ]
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])
