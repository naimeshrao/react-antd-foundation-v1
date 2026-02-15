import type { MenuProps } from 'antd'
import {
  IconBox,
  IconDashboard,
  IconHelp,
  IconLogout,
  IconPackage,
  IconReport,
  IconSettings,
  IconUser,
  ReactNode
} from '@tabler/icons-react'

type AppMenuItem = Required<MenuProps>['items'][number] & {
  route?: string
}

const item = (
  key: string,
  label: string,
  route?: string,
  icon?: ReactNode,
  children?: AppMenuItem[]
): AppMenuItem => ({
  key,
  label,
  route,
  icon,
  children
})

export const APP_MENUS: AppMenuItem[] = [
  item('dashboard', 'Dashboard', '/', <IconDashboard />),

  item('user-management', 'User Management', undefined, <IconUser />, [
    item('users-list', 'Users List', '/users'),
    item('roles', 'Roles', '/roles'),
    item('permissions', 'Permissions', '/permissions')
  ]),

  item('products', 'Products', undefined, <IconPackage />, [
    item('all-products', 'All Products', '/products'),
    item('categories', 'Categories', '/categories'),
    item('inventory', 'Inventory', '/inventory')
  ]),

  item('orders', 'Orders', undefined, <IconBox />, [
    item('new-orders', 'New Orders', '/orders/new'),
    item('completed-orders', 'Completed Orders', '/orders/completed'),
    item('returns', 'Returns', '/orders/returns')
  ]),

  item('reports', 'Reports', '/reports', <IconReport />),
  item('settings', 'Settings', '/settings', <IconSettings />),
  item('help', 'Help Center', '/help', <IconHelp />),
  item('logout', 'Logout', '/logout', <IconLogout />)
]
