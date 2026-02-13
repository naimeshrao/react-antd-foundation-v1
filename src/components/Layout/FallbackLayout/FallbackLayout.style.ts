import { flex } from '@/theme/styles/sharedStyles'
import { Layout } from 'antd'
import styled from 'styled-components'

export const FallbackWrapper = styled(Layout)`
  ${flex('column', undefined, 'center', 'center')};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  background-color: ${({ theme }) => theme.colors['gray-100']};
`

export const FallbackInner = styled.div`
  ${flex('column', '20px', 'center', 'center')};
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1024px;
`
