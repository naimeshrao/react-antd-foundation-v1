import { Card, PageOuter, Statistic } from '@/components'
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react'
import { Col, Row } from 'antd'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation('account')

  return (
    <PageOuter heading={t('Welcome')}>
      <Row gutter={16}>
        <Col span={12}>
          <Card variant="borderless">
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              prefix={<IconArrowUp />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card variant="borderless">
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              prefix={<IconArrowDown />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </PageOuter>
  )
}

export default Dashboard
