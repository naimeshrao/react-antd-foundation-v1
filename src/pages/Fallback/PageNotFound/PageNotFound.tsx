import { Button, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants'

// Usage: Route does not exist | Wrong URL
const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <ErrorBox>
      <H1 color="primary" weight={700}>
        Error 404
      </H1>
      <TextXL color="dark">Oops! Page Not Found</TextXL>
      <Button onClick={() => navigate(ROUTES.APP.DASHBOARD)}>
        Back to home
      </Button>
    </ErrorBox>
  )
}

export default PageNotFound
