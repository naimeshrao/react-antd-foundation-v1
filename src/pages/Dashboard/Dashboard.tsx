interface DashboardProps {
  message?: string
}

const Dashboard = ({ message = 'Dashboard' }: DashboardProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Dashboard
