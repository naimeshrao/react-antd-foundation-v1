/* eslint-env browser */
import React, { createContext, useState, useEffect } from 'react'
import { ConfigProvider } from 'antd'
import { getAntdTheme } from './antdTokens'
import { ThemeMode, colorVariables } from './colors'
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  THEME_TRANSITION_DURATION
} from '@/constants/theme'

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

// Apply CSS variables for colors + smooth transition
const applyCssVariables = (mode: ThemeMode) => {
  const root = document.documentElement

  // Smooth transition
  root.style.transition = `background-color ${THEME_TRANSITION_DURATION}ms, color ${THEME_TRANSITION_DURATION}ms`

  Object.entries(colorVariables[mode]).forEach(([key, value]) => {
    root.style.setProperty(`--${key}-rgb`, value)
    root.style.setProperty(`--${key}`, `rgb(${value})`)
  })
  root.setAttribute('data-theme', mode)
}

// Safely get initial theme from localStorage
const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return (
      (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || DEFAULT_THEME
    )
  }
  return DEFAULT_THEME
}

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    applyCssVariables(mode)

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(THEME_STORAGE_KEY, mode)
    }
  }, [mode])

  const toggleTheme = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme: setMode }}>
      <ConfigProvider theme={getAntdTheme(mode)}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  )
}
