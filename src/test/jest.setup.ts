/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

globalThis.TextEncoder = TextEncoder
globalThis.TextDecoder = TextDecoder as any
