/* ===== Global CSS Base Styles ===== */
import { createGlobalStyle } from 'styled-components'
import { breakpointMax } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
  /* === Reset Styles === */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100%;
    line-height: 1.5;
    font-size: 16px;
    overflow-x: hidden;
    font-family: "Montserrat", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }

  p{
    font-size: 16px;
    line-height: 20px;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, button, textarea, select {
    font: inherit;
  }

  code, kbd, samp {
    font-family: ui-monospace, 'Cascadia Code', monospace;
  }

  hr {
    all: unset;
    display: block;
    height: 1px;
    width: 100%;
    background: currentColor;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:visited, &:focus { }
    &:focus-visible { outline: 2px solid; }
    &:hover { }
  }

  /* === Form Styles === */
  [type='number']::-webkit-outer-spin-button,
  [type='number']::-webkit-inner-spin-button 
  { -webkit-appearance: none; }

  [type='number'] { -moz-appearance: textfield; }

  /* === Utility Classes === */
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .show-desktop {
    display: block;
    @media ${breakpointMax.md} {
      display: none;
    }
  }

  .show-mobile {
    display: none;
    @media ${breakpointMax.md} {
      display: block;
    }
  }

  .w-full {
    width: 100%;
  }

  .visually-hidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`
