import { SIDEBAR_STATE } from '@/constants/storage'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  AppContainer,
  AppContent,
  AppContentWrap,
  AppLayoutWrap
} from './AppLayout.style'
import { SiderBackdrop } from '@/components/Layout/AppLayout/Sidebar/Sidebar.style'
import Sidebar from './Sidebar/Sidebar'
import AppHeader from './AppHeader/AppHeader'

const AppLayout = () => {
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
          <AppContent className="app-content">
            <Outlet />
          </AppContent>
        </AppContainer>
      </AppContentWrap>
    </AppLayoutWrap>
  )
}

export default AppLayout
