import Images from '@/config/Images'
import { Outlet } from 'react-router-dom'

interface AuthLayoutProps {
  title?: string
}

const AuthLayout = ({ title }: AuthLayoutProps) => {
  return (
    <div>
      {Images.logo}
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}

export default AuthLayout
