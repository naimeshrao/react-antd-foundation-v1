import styled, { css, keyframes } from 'styled-components'

// Flex Helper
export const flex = (
  direction?: string,
  gap?: string,
  align?: string,
  justify?: string,
  wrap?: string
) => css`
  display: flex;
  ${direction ? `flex-direction: ${direction};` : ''}
  ${gap ? `gap: ${gap};` : ''}
  ${align ? `align-items: ${align};` : ''}
  ${justify ? `justify-content: ${justify};` : ''}
  ${wrap ? `flex-wrap: ${wrap};` : ''}
`

// Fixed Width (Responsive)
export const fixedWidth = (width?: number | string) => css`
  ${width ? `width: ${typeof width === 'number' ? `${width}px` : width};` : ''}
  max-width: 100%;
`

// Loader & Spin Animation
export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

// Div Button
export const DivButton = styled.button`
  width: 100%;
  display: block;
  box-shadow: none;
  cursor: pointer;

  // User Accessibility
  &:focus-visible {
    outline: 2px solid;
  }
`
