import { RouteScrollHandler } from '@/components/Utilities'
import Images from '@/constants/images'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'

interface AuthLayoutProps {
  title?: string
}

const AuthLayout = ({ title }: AuthLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <img src={Images.logo} alt="Logo" />
      <h1>{title}</h1>
      <RouteScrollHandler targetRef={contentRef} />
      <div ref={contentRef}>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
