interface LoginProps {
  message?: string
}

const Login = ({ message = 'Login' }: LoginProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Login
