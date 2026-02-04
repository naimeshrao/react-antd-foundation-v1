interface NotFoundProps {
  message?: string
}

const NotFound = ({ message = '404 Not Found' }: NotFoundProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default NotFound
