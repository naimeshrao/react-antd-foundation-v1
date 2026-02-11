import { IconArrowDown } from '@tabler/icons-react'
import { Select as AntdSelect, SelectProps } from 'antd'

import styled from 'styled-components'

const SelectStyled = styled(AntdSelect)`
  width: 100%;

  // ===== Base Select =====
  &.ant-select {
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
    &.ant-select-status-error {
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
