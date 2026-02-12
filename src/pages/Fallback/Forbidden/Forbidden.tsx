import { Button, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'

// User is logged in but does not have permission
const Forbidden = () => {
  return (
    <ErrorBox>
      <H1 color="primary" weight={700}>
        Error 403
      </H1>
      <TextXL color="dark">Access Denied</TextXL>
      <Button>Homepage</Button>
    </ErrorBox>
  )
}

export default Forbidden
