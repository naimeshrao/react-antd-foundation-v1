import { Card } from '@/components'
import { fixedWidth, flex } from '@/theme/styles/sharedStyles'
import styled from 'styled-components'

export const ErrorBox = styled(Card)`
  ${fixedWidth('400px')}
  padding: 30px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  .ant-card-body {
    ${flex('column', '24px', 'center', 'center')};
    text-align: center;
  }

  h1 {
    font-size: 50px;
  }
`
