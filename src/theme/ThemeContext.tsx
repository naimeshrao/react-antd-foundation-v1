import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import { getAntdTheme } from './antdTokens'
import { ThemeMode, AppTheme } from './types'
import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/constants/storage'
import { getTheme } from './appTheme'
import { LoaderSVG } from '@/assets/svgs'

interface ThemeContextProps {
  mode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: DEFAULT_THEME,
  toggleTheme: () => {},
  setTheme: () => {}
})

// Get initial theme safely
const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return (
      (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || DEFAULT_THEME
    )
  }
  return DEFAULT_THEME
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children
}) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(THEME_STORAGE_KEY, mode)
    }
  }, [mode])

  const toggleTheme = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

  const theme: AppTheme = getTheme(mode)

  const spinIndicator = <LoaderSVG />

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme: setMode }}>
      <ThemeProvider theme={theme}>
        <ConfigProvider
          theme={getAntdTheme(mode)}
          spin={{ indicator: spinIndicator }}
        >
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
