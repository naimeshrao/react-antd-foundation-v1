interface ForgotPasswordProps {
  message?: string
}

const ForgotPassword = ({
  message = 'Forgot Password'
}: ForgotPasswordProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default ForgotPassword
