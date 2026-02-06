import { Outlet } from 'react-router-dom'

interface PublicLayoutProps {
  title?: string
}

const PublicLayout = ({ title }: PublicLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}

export default PublicLayout
