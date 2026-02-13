import {
  InputStyle,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { TimePicker as AntdTimePicker } from 'antd'
import styled from 'styled-components'

export const TimePicker = styled(AntdTimePicker)`
  width: 100%;
  ${InputStyle};
  ${SingleLineInput};

  &:hover {
    ${InputStyleHover};
  }

  &.ant-picker-focused {
    ${InputStyleFocused};
  }

  // Error State
  &.ant-picker-status-error:not(.ant-picker-disabled) {
    ${InputStyleError};
  }
`
