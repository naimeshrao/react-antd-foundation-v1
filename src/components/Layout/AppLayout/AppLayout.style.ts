import { media } from '@/theme/styles/breakpoints'
import { flex } from '@/theme/styles/sharedStyles'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Content } = Layout

export const AppLayoutWrap = styled(Layout)`
  width: 100%;
  overflow: hidden;
  padding: 0;
  height: 100vh;

  // Mobile Version
  ${media.below('lg')} {
    &.sider-collapsed {
      .sider-backdrop {
        display: block;
      }

      .ant-layout-sider {
        left: 0;
      }
    }
  }
`

export const AppContentWrap = styled(Content)`
  ${flex('column')};
  flex: 1 1 auto;
  position: relative;
  padding: 0;
  overflow: auto;
`

export const AppContainer = styled(Content)`
  ${flex('column')};
  flex: 1 1 auto;
  position: relative;
  padding: 0;
  overflow-x: hidden;
`
