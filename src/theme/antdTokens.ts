import { ThemeConfig } from 'antd'
import { ThemeMode } from './types'

export const getAntdTheme = (mode: ThemeMode): ThemeConfig => ({
  token: {
    // Colors
    colorPrimary: mode === 'light' ? '#0C78FF' : '#aa3344',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',

    // Background & borders
    colorBgBase: mode === 'light' ? '#ffffff' : '#141414',
    colorBgContainer: mode === 'light' ? '#ffffff' : '#1f1f1f',
    colorBorder: mode === 'light' ? '#d9d9d9' : '#434343',

    // Text colors
    colorTextBase: mode === 'light' ? '#000000d9' : '#ffffffd9',
    colorTextSecondary: mode === 'light' ? '#00000073' : '#ffffff73',

    // Links
    colorLink: mode === 'light' ? '#0C78FF' : '#ff7a7a',
    colorLinkHover: mode === 'light' ? '#096dd9' : '#ff4d4f',
    colorLinkActive: mode === 'light' ? '#0050b3' : '#aa3344',

    // Typography
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.5,
    fontSize: 14,
    fontWeightStrong: 600,
    fontSizeHeading1: 24,
    fontSizeHeading2: 20,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,

    // Border & Radius
    borderRadius: 6,
    borderRadiusSM: 4,
    borderRadiusLG: 8,

    // Spacing
    controlHeight: 38,
    controlHeightLG: 46,
    controlHeightSM: 30,
    paddingSM: 8,
    padding: 12,
    paddingLG: 16,

    // Shadows
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    boxShadowSecondary: '0 1px 4px rgba(0,0,0,0.12)',

    // Form Items
    colorText: mode === 'light' ? '#000000d9' : '#ffffffd9',
    colorTextPlaceholder: mode === 'light' ? '#8c8c8c' : '#bfbfbf',
    colorTextDisabled: mode === 'light' ? '#8c8c8c' : '#bfbfbf'
  },

  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
      marginLG: 0,
      marginSM: 0
    },
    Button: {
      borderRadius: 6,
      controlHeight: 36,
      paddingInline: 16
    },
    Input: {
      controlHeight: 36,
      borderRadius: 6
    },
    Card: {
      borderRadius: 6,
      padding: 16
    },
    Select: {
      optionHeight: 26,
      optionLineHeight: '26px',
      optionSelectedBg: '#fbfbfb'
    },
    Radio: { dotSize: 8 },
    Modal: {
      borderRadius: 6
    },
    Layout: {
      siderBg: '#ffffff',
      headerBg: '#ffffff',
      bodyBg: '#ffffff'
    },
    Table: {
      headerBg: '#fbfbfb',
      borderColor: '#cccccc',
      headerColor: '#666666',
      colorText: '#777777',
      rowHoverBg: '#fbfbfb',
      cellFontSize: 14,
      borderRadius: 0,
      headerBorderRadius: 0,
      cellPaddingBlock: 12,
      cellPaddingInline: 24
    }
  }
})

// Usage: mode === 'light' ? '#000000' : '#ffffff' to apply color based on mode
