import { Menu } from '@/components/Antd'
import { SiderContent, SiderHeader, SiderWrap } from './Sidebar.style'
import { LogoMain } from '@/assets/svgs'
import { APP_MENUS } from '@/constants'
import { useLocation, useNavigate } from 'react-router-dom'

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <SiderWrap collapsed={collapsed} width={220}>
      <SiderHeader>
        <LogoMain />
      </SiderHeader>
      <SiderContent>
        <Menu
          className="sider-menu"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          selectedKeys={[location.pathname]}
          onClick={(e) => navigate(e.key)}
          items={APP_MENUS}
        />
      </SiderContent>
    </SiderWrap>
  )
}

export default Sidebar
