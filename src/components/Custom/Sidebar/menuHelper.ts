import type { ReactNode, Key } from 'react'
import { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}
