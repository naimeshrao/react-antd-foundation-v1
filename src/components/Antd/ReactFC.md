# React.FC wrapper (used when custom props or logic required)

## Component File

```tsx
import React from 'react'
import styled from 'styled-components'
import { Button as AntdButton } from 'antd'
import type { ButtonProps as AntdButtonProps } from 'antd'

type BtnType = 'primary' | 'secondary' | 'danger'

export interface ButtonProps extends AntdButtonProps {
  btnType?: BtnType
}

interface StyledButtonProps {
  btnType?: BtnType
}

const StyledButton = styled(AntdButton)<StyledButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors['primary-500']};
  }
`

const Button: React.FC<ButtonProps> = ({ children, btnType, ...rest }) => {
  return (
    <StyledButton {...rest} btnType={btnType}>
      {children}
    </StyledButton>
  )
}

export default Button
```

## Index file for export

```tsx
export { default as Button } from './Button/Button'
```
