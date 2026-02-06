interface PageNotFoundProps {
  message?: string
}

const PageNotFound = ({ message = '404 Not Found' }: PageNotFoundProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default PageNotFound
