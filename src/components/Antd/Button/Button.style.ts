import styled from 'styled-components'
import { Button as AntdButton } from 'antd'

type BtnType = 'primary' | 'secondary' | 'danger'

interface StyledButtonProps {
  btnType?: BtnType
}

export const StyledButton = styled(AntdButton)<StyledButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
