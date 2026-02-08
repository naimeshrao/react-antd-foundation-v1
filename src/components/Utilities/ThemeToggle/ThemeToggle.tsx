import { Switch, Tooltip } from 'antd'
import { IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from '@/theme'

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme()

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}>
      <Switch
        checked={mode === 'dark'}
        onChange={toggleTheme}
        checkedChildren={<IconMoon size={16} />}
        unCheckedChildren={<IconSun size={16} />}
      />
    </Tooltip>
  )
}

export default ThemeToggle
