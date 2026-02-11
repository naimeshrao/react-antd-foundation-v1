import { Select as AntdSelect } from 'antd'
import type { SelectProps as AntdSelectProps } from 'antd'
import styled from 'styled-components'

const BaseSelect = styled(AntdSelect)`
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
` as typeof AntdSelect

function Select<ValueType = unknown>(props: AntdSelectProps<ValueType>) {
  return <BaseSelect {...props} />
}

export default Select
