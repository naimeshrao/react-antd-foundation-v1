import { Button, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'
import { ROUTES } from '@/constants'
import { useNavigate } from 'react-router-dom'

// User is logged in but does not have permission
const Forbidden = () => {
  const navigate = useNavigate()

  return (
    <ErrorBox>
      <H1 color="primary" weight={700}>
        Error 403
      </H1>
      <TextXL color="dark">Access Denied</TextXL>
      <Button onClick={() => navigate(ROUTES.APP.DASHBOARD)}>
        Back to home
      </Button>
    </ErrorBox>
  )
}

export default Forbidden
