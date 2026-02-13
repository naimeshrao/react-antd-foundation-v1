import { H2 } from '@/components/Utilities'
import { ReactNode } from 'react'

interface PageHeadingProps {
  heading: ReactNode
}

export function PageHeading({ heading }: PageHeadingProps) {
  return (
    <H2 weight={700} color="dark">
      {heading}
    </H2>
  )
}

export default PageHeading
