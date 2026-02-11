import { flex } from '@/theme/styles/sharedStyles'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

export const AppHeaderWrap = styled(Header)`
  ${flex(undefined, '12px', 'center')};
  background: ${({ theme }) => theme.colors['primary-500']};
  height: 50px;
  padding: 0 30px;
`
