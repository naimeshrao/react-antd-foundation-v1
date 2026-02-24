import { Outlet } from 'react-router-dom'
import { FallbackInner, FallbackWrapper } from './FallbackLayout.style'
import { RouteScrollHandler } from '@/components/Utilities'
import { useRef } from 'react'

const FallbackLayout = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <FallbackWrapper>
      <RouteScrollHandler targetRef={contentRef} />
      <FallbackInner ref={contentRef}>
        <Outlet />
      </FallbackInner>
    </FallbackWrapper>
  )
}

export default FallbackLayout
