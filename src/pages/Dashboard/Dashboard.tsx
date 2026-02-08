import { useTranslation } from 'react-i18next'

interface DashboardProps {
  message?: string
}

const Dashboard = ({ message = 'Dashboard' }: DashboardProps) => {
  const { t } = useTranslation('account')

  return (
    <div>
      <h1>{message}</h1>

      <p>{t('Welcome')}</p>
    </div>
  )
}

export default Dashboard
