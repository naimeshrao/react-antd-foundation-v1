import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import ForgotPassword from '@/pages/Auth/ForgotPassword/ForgotPassword'
import PageNotFound from '@/pages/PageNotFound/PageNotFound'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Login from '@/pages/Auth/Login/Login'
import { AuthLayout, AppLayout } from '@/components/Layout'

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
