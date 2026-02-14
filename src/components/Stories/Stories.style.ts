import { flex } from '@/theme/styles/sharedStyles'
import { Flex } from 'antd'
import styled from 'styled-components'
import { H4 } from '../Utilities'

export const StorySection = styled(Flex)`
  ${flex('column', '24px', undefined, 'space-between')};
`

export const StorySubTitle = styled(H4).attrs({
  weight: 600
})`
  width: 100%;
  text-align: center;
  background: rgba(69, 73, 98, 0.2);
  color: white;
  padding: 8px;
  margin: 0;
  border-radius: 4px;
`
