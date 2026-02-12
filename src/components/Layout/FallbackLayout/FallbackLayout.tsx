import { Outlet } from 'react-router-dom'
import { FallbackInner, FallbackWrapper } from './FallbackLayout.style'

const FallbackLayout = () => {
  return (
    <FallbackWrapper>
      <FallbackInner>
        <Outlet />
      </FallbackInner>
    </FallbackWrapper>
  )
}

export default FallbackLayout
