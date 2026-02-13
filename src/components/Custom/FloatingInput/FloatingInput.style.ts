import { ellipsis } from '@/theme/styles/sharedStyles'
import { Form } from 'antd'
import styled, { css } from 'styled-components'

const floatingLabelActive = css`
  left: 14px;
  top: -8px;
  line-height: 18px;
  font-size: 14px;
  padding: 0 4px;
  border-radius: 3px;
  background: white;
`

export const FloatingInputStyle = styled(Form.Item)<{ $mb?: number }>`
  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : '24px')};

  .float-input-label {
    ${ellipsis}
    position: absolute;
    left: 14px;
    top: 0;
    z-index: 1;
    pointer-events: none;
    transition: all 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
    max-width: 90%;
    font-size: 14px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors['gray-500']};

    .req-mark {
      color: ${({ theme }) => theme.colors['error-dark']};
    }
  }

  .floating-input {
    &.is-focused,
    &.is-filled {
      .float-input-label {
        ${floatingLabelActive};
      }
    }
  }

  // ===== Focus State: Float label for all Controls =====
  input.ant-input:focus,
  textarea.ant-input:focus,
  .ant-input-affix-wrapper-focused,
  .ant-select-open,
  .ant-picker-focused,
  .ant-input-number-focused {
    & + .float-input-label {
      ${floatingLabelActive};
    }
  }

  // ===== Fill State: Float label for all Controls =====
  &.is-filled .float-input-label {
    ${floatingLabelActive};
  }

  // ===== Input Error =====
  .ant-form-item-additional {
    .ant-form-item-explain-error {
      font-size: 12px;
      line-height: 16px;
    }
  }

  // ===== Input Style Reset =====
  .ant-picker-input {
    input::placeholder {
      opacity: 0;
    }
  }
`
