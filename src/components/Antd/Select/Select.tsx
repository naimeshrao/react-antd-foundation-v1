import {
  InputStyle,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { IconArrowDown } from '@tabler/icons-react'
import { Select as AntdSelect, SelectProps } from 'antd'

import styled from 'styled-components'

const SelectStyled = styled(AntdSelect)`
  width: 100%;

  // ===== Base Select =====
  &.ant-select {
    ${InputStyle};
    ${SingleLineInput};
    padding: 0 14px;

    &:not(.ant-select-disabled):hover {
      ${InputStyleHover};
    }

    &.ant-select-focused,
    &.ant-select-open {
      ${InputStyleFocused};
    }

    .ant-select-content {
      .ant-select-input {
      }

      .ant-select-placeholder {
      }

      &.ant-select-content-has-value {
      }
    }

    .ant-select-suffix {
      .anticon {
        pointer-events: none;
      }
    }

    // Focused State
    &.ant-select-focused {
    }

    // Disabled State
    &.ant-select-disabled {
    }

    // Error State
    &.ant-select-status-error:not(.ant-select-disabled) {
      ${InputStyleError};
    }
  }

  // ===== Outlined Variant =====
  &.ant-select-outlined {
  }

  // ===== Multiple Select =====
  &.ant-select-multiple {
  }
`

export function Select({
  suffixIcon = <IconArrowDown />,
  ...props
}: SelectProps) {
  return <SelectStyled {...props} suffixIcon={suffixIcon} />
}

export default Select
