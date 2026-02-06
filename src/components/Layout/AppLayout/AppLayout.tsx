import { Outlet } from 'react-router-dom'

interface AppLayoutProps {
  title?: string
}

const AppLayout = ({ title }: AppLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}

export default AppLayout
