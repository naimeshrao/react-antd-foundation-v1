import { Button, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants'

// Uage: Backend crashes | API fails unexpectedly
const ServerError = () => {
  const navigate = useNavigate()

  return (
    <ErrorBox>
      <H1 color="primary" weight={700}>
        Error 500
      </H1>
      <TextXL color="dark">Internal Server Error</TextXL>
      <Button onClick={() => navigate(ROUTES.APP.DASHBOARD)}>
        Back to home
      </Button>
    </ErrorBox>
  )
}

export default ServerError
