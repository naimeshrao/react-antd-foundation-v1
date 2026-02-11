import { AppHeader, Sidebar } from '@/components/Custom'
import { LanguageSelector, ThemeToggle } from '@/components/Utilities'
import { SIDEBAR_STATE } from '@/constants/theme'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContainer, AppContentWrap, AppLayoutWrap } from './AppLayout.style'
import { SiderBackdrop } from '@/components/Custom/Sidebar/Sidebar.style'

interface AppLayoutProps {
  title?: string
}

const AppLayout = ({ title }: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem(SIDEBAR_STATE)
    if (stored) {
      setCollapsed(JSON.parse(stored))
    }
  }, [])

  const handleSidebarToggle = () => {
    setCollapsed((prev) => {
      localStorage.setItem(SIDEBAR_STATE, JSON.stringify(!prev))
      return !prev
    })
  }

  return (
    <AppLayoutWrap className={collapsed ? 'sider-collapsed' : ''}>
      <Sidebar collapsed={collapsed} />
      <SiderBackdrop className="sider-backdrop" onClick={handleSidebarToggle} />
      <AppContentWrap>
        <AppHeader onSidebarToggle={handleSidebarToggle} />
        <AppContainer>
          <div>
            <ThemeToggle />
            <LanguageSelector />
            <Outlet />
          </div>
        </AppContainer>
      </AppContentWrap>
    </AppLayoutWrap>
  )
}

export default AppLayout
