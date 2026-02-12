import { Button, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'

// Uage: Backend crashes | API fails unexpectedly
const ServerError = () => {
  return (
    <ErrorBox>
      <H1 color="primary" weight={700}>
        Error 500
      </H1>
      <TextXL color="dark">Internal Server Error</TextXL>
      <Button>Homepage</Button>
    </ErrorBox>
  )
}

export default ServerError
