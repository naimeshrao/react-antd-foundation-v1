import { Outlet } from 'react-router-dom'

interface RootLayoutProps {
  title?: string
}

const RootLayout = ({ title }: RootLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}

export default RootLayout
