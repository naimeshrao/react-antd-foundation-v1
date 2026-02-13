import { useState } from 'react'

export function useFilled<T = unknown>() {
  const [isFilled, setIsFilled] = useState(false)

  const updateFilled = (value: T) => {
    const filled =
      value !== undefined &&
      value !== null &&
      value !== '' &&
      !(Array.isArray(value) && value.length === 0)

    setIsFilled(filled)
  }

  return { isFilled, updateFilled }
}
