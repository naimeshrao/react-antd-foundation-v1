import { Form } from 'antd'
import styled from 'styled-components'

interface FloatingInputStyleProps {
  $mb?: number
}

export const FloatingInputStyle = styled(Form.Item)<FloatingInputStyleProps>`
  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : '24px')};
  background-color: red;
`
