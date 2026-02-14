import type { Preview, Decorator } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'
import { getTheme } from '../src/theme/appTheme'
import { getAntdTheme } from '../src/theme/antdTokens'
import './preview.css'

/**
 * Global decorator to provide theme context to all stories
 */
const withThemeProvider: Decorator = (Story, context) => {
  // Get theme mode from global types (light or dark)
  const themeMode = context.globals.theme || 'light'

  const appTheme = getTheme(themeMode as 'light' | 'dark')
  const antdTheme = getAntdTheme(themeMode as 'light' | 'dark')

  return React.createElement(
    ThemeProvider,
    { theme: appTheme },
    React.createElement(
      ConfigProvider,
      { theme: antdTheme },
      React.createElement(
        'div',
        {
          style: {
            padding: '2rem',
            background: appTheme.colors.white,
            color: appTheme.colors.black,
            width: 'auto',
            flex: '1'
          }
        },
        React.createElement(Story)
      )
    )
  )
}

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for all stories',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' }
        ]
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color|Color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    },
    docs: {
      toc: true,
      source: {
        transform: (code: string) => {
          return code.replace(/Styled\((.*?)\)/g, '$1')
        }
      }
    }
  }
}

export default preview
