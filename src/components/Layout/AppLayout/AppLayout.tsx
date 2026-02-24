import { SIDEBAR_STATE } from '@/constants/storage'
import { useEffect, useRef, useState } from 'react'
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
import { RouteScrollHandler, ScrollTopButton } from '@/components/Utilities'

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)

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
          <RouteScrollHandler targetRef={contentRef} />
          <AppContent ref={contentRef} className="app-content">
            <Outlet />
          </AppContent>
        </AppContainer>
      </AppContentWrap>
      <ScrollTopButton targetRef={contentRef} />
    </AppLayoutWrap>
  )
}

export default AppLayout
