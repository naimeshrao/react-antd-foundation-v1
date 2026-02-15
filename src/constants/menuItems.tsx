import type { MenuProps } from 'antd'
import { IconDashboard, IconUser, ReactNode } from '@tabler/icons-react'
import { ROUTES } from './routes'

type AppMenuItem = Required<MenuProps>['items'][number] & {
  route?: string
}

const item = (
  route: string,
  label: string,
  icon?: ReactNode,
  children?: AppMenuItem[]
): AppMenuItem => ({
  key: route,
  label,
  icon,
  children
})

export const APP_MENUS: AppMenuItem[] = [
  item(ROUTES.APP.DASHBOARD, 'Dashboard', <IconDashboard />),

  item('/user-management', 'User Management', <IconUser />, [
    item(ROUTES.APP.USERLIST, 'Users List'),
    item('/roles', 'Roles'),
    item('/permissions', 'Permissions')
  ])
]
