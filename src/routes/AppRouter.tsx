import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import ForgotPassword from '@/pages/Auth/ForgotPassword/ForgotPassword'
import PageNotFound from '@/pages/PageNotFound/PageNotFound'
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout'
import AppLayout from '@/components/Layout/AppLayout/AppLayout'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Login from '@/pages/Auth/Login/Login'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.AUTH.LOGIN, element: <Login /> },
      { path: ROUTES.AUTH.FORGOT_PASSWORD, element: <ForgotPassword /> }
    ]
  },
  {
    element: <AppLayout />,
    children: [
      { path: ROUTES.COMMON.HOME, element: <Dashboard /> },
      { path: ROUTES.COMMON.NOT_FOUND, element: <PageNotFound /> },
      { path: '*', element: <Navigate to={ROUTES.COMMON.NOT_FOUND} /> }
    ]
  }
])
