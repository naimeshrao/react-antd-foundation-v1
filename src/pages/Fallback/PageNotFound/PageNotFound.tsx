import { Button, H1, TextXL } from '@/components'
import { ErrorBox } from '../Fallback.style'

// Usage: Route does not exist | Wrong URL
const PageNotFound = () => {
  return (
    <ErrorBox>
      <H1 color="primary" weight={700}>
        Error 404
      </H1>
      <TextXL color="dark">Oops! Page Not Found</TextXL>
      <Button>Back to home</Button>
    </ErrorBox>
  )
}

export default PageNotFound
