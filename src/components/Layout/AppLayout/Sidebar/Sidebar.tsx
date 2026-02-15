import { Menu } from '@/components/Antd'
import { SiderContent, SiderHeader, SiderWrap } from './Sidebar.style'
import { LogoMain } from '@/assets/svgs'
import { APP_MENUS } from '@/constants'

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed = false }: SidebarProps) {
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
          items={APP_MENUS}
        />
      </SiderContent>
    </SiderWrap>
  )
}

export default Sidebar
