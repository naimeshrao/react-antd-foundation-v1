import { flex } from '@/theme/styles/sharedStyles'
import { Empty as AntdEmpty } from 'antd'
import styled from 'styled-components'

export const Empty = styled(AntdEmpty)`
  .ant-empty-image {
  }

  .ant-empty-description {
  }

  .ant-empty-footer {
    ${flex('row', '16px', undefined, 'center')};
  }
`
