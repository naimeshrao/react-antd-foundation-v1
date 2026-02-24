import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { AuthLayout, AppLayout, FallbackLayout } from '@/components/Layout'
import ForgotPassword from '@/pages/Auth/ForgotPassword/ForgotPassword'
import Login from '@/pages/Auth/Login/Login'
import Dashboard from '@/pages/Dashboard/Dashboard'
import PageNotFound from '@/pages/Fallback/PageNotFound/PageNotFound'
import { ProtectedLayout } from './ProtectedRoute'
import UserList from '@/pages/User/UserList/UserList'

export const router = createBrowserRouter([
  // Public Routes
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.AUTH.LOGIN, element: <Login /> },
      { path: ROUTES.AUTH.FORGOT_PASSWORD, element: <ForgotPassword /> }
    ]
  },

  // Protected Routes
  {
    element: <ProtectedLayout />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: ROUTES.APP.DASHBOARD, element: <Dashboard /> },
          { path: ROUTES.APP.USERLIST, element: <UserList /> }
        ]
      },

      // Fallback Pages (Errors)
      {
        element: <FallbackLayout />,
        children: [
          { path: ROUTES.COMMON.NOT_FOUND, element: <PageNotFound /> },
          {
            path: '*',
            element: <Navigate to={ROUTES.COMMON.NOT_FOUND} replace />
          }
        ]
      }
    ]
  }
])
