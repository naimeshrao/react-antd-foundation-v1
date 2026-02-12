import { Form } from 'antd'
import { useState, cloneElement, ReactElement } from 'react'
import type { FormItemProps } from 'antd'

type ChildProps = {
  onFocus?: (...args: any[]) => void
  onBlur?: (...args: any[]) => void
  onChange?: (...args: any[]) => void
}

interface FloatingInputProps extends FormItemProps {
  label: string
  children: ReactElement<ChildProps>
}

export function FloatingInput({
  label,
  children,
  ...formItemProps
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const clonedChild = cloneElement(children, {
    onFocus: (e: any) => {
      setIsFocused(true)
      children.props.onFocus?.(e)
    },
    onBlur: (e: any) => {
      setIsFocused(false)
      children.props.onBlur?.(e)
    },
    onChange: (value: any, option?: any) => {
      let actualValue = value
      if (value?.target) {
        actualValue = value.target.value
      }
      if (Array.isArray(actualValue)) {
        setIsFilled(actualValue.length > 0)
      } else {
        setIsFilled(!!actualValue)
      }
      children.props.onChange?.(value, option)
    }
  })

  return (
    <Form.Item {...formItemProps}>
      <div
        className={`floating-input ${
          isFocused ? 'is-focused' : ''
        } ${isFilled ? 'is-filled' : ''}`}
      >
        {clonedChild}
        <label>{label}</label>
      </div>
    </Form.Item>
  )
}
