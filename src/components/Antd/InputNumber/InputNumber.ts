import {
  InputStyle,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { InputNumber as AntdInputNumber } from 'antd'
import styled from 'styled-components'

export const InputNumber = styled(AntdInputNumber)`
  width: 100%;
  ${InputStyle};
  ${SingleLineInput};

  &:hover {
    ${InputStyleHover};
  }

  &.ant-input-number-focused {
    ${InputStyleFocused};
  }

  .ant-input-number-input {
  }

  // Error State
  &.ant-input-number-status-error:not(.ant-number-disabled) {
    ${InputStyleError};
  }
`
