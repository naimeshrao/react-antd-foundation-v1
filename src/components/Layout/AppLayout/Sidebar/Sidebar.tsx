import { Menu } from '@/components/Antd'
import { SiderContent, SiderHeader, SiderWrap } from './Sidebar.style'
import { LogoMain } from '@/assets/svgs'
import {
  IconBox,
  IconDashboard,
  IconHelp,
  IconLogout,
  IconPackage,
  IconReport,
  IconSettings,
  IconUser
} from '@tabler/icons-react'
import { getItem, MenuItem } from './menuHelper'

interface SidebarProps {
  collapsed: boolean
}

export const menuItems: MenuItem[] = [
  getItem('Dashboard', '1', <IconDashboard />),

  getItem('User Management', 'sub1', <IconUser />, [
    getItem('Users List', '2'),
    getItem('Roles', '3'),
    getItem('Permissions', '4')
  ]),

  getItem('Products', 'sub2', <IconPackage />, [
    getItem('All Products', '5'),
    getItem('Categories', '6'),
    getItem('Inventory', '7')
  ]),

  getItem('Orders', 'sub3', <IconBox />, [
    getItem('New Orders', '8'),
    getItem('Completed Orders', '9'),
    getItem('Returns', '10')
  ]),

  getItem('Reports', '11', <IconReport />),
  getItem('Settings', '12', <IconSettings />),
  getItem('Help Center', '13', <IconHelp />),
  getItem('Logout', '14', <IconLogout />)
]

export function Sidebar({ collapsed = false }: SidebarProps) {
  return (
    <SiderWrap collapsed={collapsed} width={220}>
      <SiderHeader>
        <LogoMain />
      </SiderHeader>
      <SiderContent>
        <Menu
          className="sider-menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </SiderContent>
    </SiderWrap>
  )
}

export default Sidebar
