import { Button } from '@/components/Antd'
import { AppHeaderWrap } from './AppHeader.style'
import { IconMenu } from '@tabler/icons-react'

interface AppHeaderProps {
  onSidebarToggle: () => void
  logout?: () => void
}

export function AppHeader({ onSidebarToggle }: AppHeaderProps) {
  return (
    <AppHeaderWrap>
      <Button
        type="text"
        size="small"
        className="sider-toggle-btn"
        icon={<IconMenu />}
        onClick={onSidebarToggle}
      />
    </AppHeaderWrap>
  )
}

export default AppHeader
