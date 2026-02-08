import { LanguageSelector, ThemeToggle } from '@/components/Utilities'
import { Outlet } from 'react-router-dom'

interface AppLayoutProps {
  title?: string
}

const AppLayout = ({ title }: AppLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <ThemeToggle />
      <LanguageSelector />
      <Outlet />
    </div>
  )
}

export default AppLayout
