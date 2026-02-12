import { Form, type FormItemProps } from 'antd'
import { ReactElement } from 'react'
import { FloatingInputStyle } from './FloatingInput.style'

type NamePath = FormItemProps['name']

interface FloatingInputProps extends Omit<
  FormItemProps,
  'label' | 'required' | 'name'
> {
  name: NamePath
  children: ReactElement
  label: string
  required?: boolean
  mb?: number
  ghost?: boolean
}

export function FloatingInput({
  children,
  label,
  required = false,
  className,
  mb,
  ghost = false,
  name,
  ...formItemProps
}: FloatingInputProps) {
  const form = Form.useFormInstance()
  const value = Form.useWatch(name, form)

  const isFilled =
    value !== undefined &&
    value !== null &&
    !(Array.isArray(value) && value.length === 0) &&
    value !== ''

  return (
    <FloatingInputStyle
      {...formItemProps}
      name={name}
      required={required}
      $mb={mb}
      className={`float-input ${ghost ? 'ghost' : ''} ${
        className || ''
      } ${isFilled ? 'filled' : ''}`}
    >
      <div className="float-input-wrap">
        {children}

        <label className="float-input-label">
          {label}
          {required && <span className="float-input-required">*</span>}
        </label>
      </div>
    </FloatingInputStyle>
  )
}

export default FloatingInput
