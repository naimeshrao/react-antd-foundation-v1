import type { ReactNode } from 'react'
import { Form, type FormItemProps } from 'antd'
import { FloatingInputStyle } from './FloatingInput.style'

interface FloatingInputProps extends FormItemProps {
  label?: string
  children?: ReactNode
  mb?: number
  ghost?: boolean
}

export function FloatingInput({
  label,
  children,
  required,
  className,
  mb,
  ghost = false,
  ...formItemProps
}: FloatingInputProps) {
  const name = formItemProps.name
  const value = Form.useWatch(name ?? '')
  const isFilled =
    !!name &&
    value !== undefined &&
    value !== null &&
    !(typeof value === 'string' && value.trim() === '') &&
    !(Array.isArray(value) && value.length === 0)

  const isRequired =
    required ||
    (Array.isArray(formItemProps.rules) &&
      formItemProps.rules.some(
        (rule) =>
          typeof rule === 'object' &&
          rule !== null &&
          'required' in rule &&
          rule.required
      ))

  console.log('Field name:', formItemProps.name)

  return (
    <FloatingInputStyle
      {...formItemProps}
      label={null}
      required={required}
      $mb={mb}
      className={`${className || ''} ${ghost ? 'ghost' : ''}`}
    >
      <div className={`floating-input ${isFilled ? 'is-filled' : ''}`}>
        {children}

        {label && (
          <label className="float-input-label">
            {label}
            {isRequired && <i className="req-mark">*</i>}
          </label>
        )}
      </div>
    </FloatingInputStyle>
  )
}

export default FloatingInput
