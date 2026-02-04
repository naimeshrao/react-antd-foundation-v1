import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  )
}

export default AuthLayout
