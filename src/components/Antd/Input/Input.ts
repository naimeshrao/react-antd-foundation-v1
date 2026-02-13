import {
  InputStyle,
  InputStyleError,
  InputStyleFocused,
  InputStyleHover,
  SingleLineInput
} from '@/theme/styles/sharedStyles'
import { Input as AntdInput } from 'antd'
import styled, { css } from 'styled-components'

type ResizeType = 'none' | 'vertical' | 'horizontal' | 'both'

interface TextAreaProps {
  resize?: ResizeType
}

const textareaRow: Record<number, string> = {
  2: '60px',
  3: '80px',
  4: '120px',
  5: '160px',
  6: '180px',
  7: '220px'
}

const baseInputStyles = css`
  ${InputStyle};
  ${SingleLineInput};
  width: 100%;

  textarea.ant-input {
    padding: 14px;
    resize: none;
  }

  // ===== Hover/Focus =====
  &:not(.ant-input-disabled):hover {
    ${InputStyleHover};
  }

  &:focus {
    ${InputStyleFocused};
  }

  // ===== Sizes =====
  &.ant-input-sm {
  }

  &.ant-input-lg {
  }

  // ===== Input Affix Wrapper with Icon =====
  &.ant-input-affix-wrapper {
    &:hover {
      ${InputStyleHover}
    }

    &.ant-input-affix-wrapper-focused {
      ${InputStyleFocused}
    }

    .ant-input-prefix {
    }

    .ant-input-suffix {
    }
  }

  // ===== Error State =====
  &.ant-input-status-error:not(.ant-input-disabled) {
    ${InputStyleError};
  }

  // ===== Autofill Fix =====
  .ant-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.white}
      inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.black};
  }
`

export const Input = styled(AntdInput)`
  ${baseInputStyles}
`

export const TextArea = styled(AntdInput.TextArea)<TextAreaProps>`
  ${baseInputStyles}

  &.ant-input {
    resize: ${({ resize = 'none' }) => resize};

    ${({ rows }) =>
      rows &&
      textareaRow[rows] &&
      css`
        min-height: ${textareaRow[rows]};
      `}
  }
`

export const Password = styled(AntdInput.Password)`
  ${baseInputStyles}
`

export const Search = styled(AntdInput.Search)`
  ${baseInputStyles}
`
