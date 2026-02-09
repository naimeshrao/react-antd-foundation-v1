import { Card as AntdCard } from 'antd'
import styled from 'styled-components'
import type { CardProps as AntdCardProps } from 'antd'

export type cardType = 'default' | 'outlined' | 'elevated'

export interface CardProps extends AntdCardProps {
  cardType?: cardType
}

export const Card = styled(AntdCard)<CardProps>`
  border-radius: 8px;
  transition: all 0.2s ease;

  ${({ cardType }) => {
    switch (cardType) {
      case 'outlined':
        return `
          background-color: red;
        `
      case 'elevated':
        return `
          background-color: green;
        `
      case 'default':
      default:
        return `
          background-color: blue;
        `
    }
  }}
`
