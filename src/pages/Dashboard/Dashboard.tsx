import {
  Button,
  Card,
  Input,
  PageOuter,
  Spin,
  Statistic,
  Table
} from '@/components'
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react'
import { Col, Flex, Row } from 'antd'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation('account')

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return (
    <PageOuter heading="Dashboard">
      <p>{t('Welcome')}</p>

      <Table dataSource={dataSource} columns={columns} />

      <br />

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
      <br />
      <Row gutter={[24, 16]}>
        <Col xs={24} lg={{ flex: 'none' }}>
          Auto Flex Col LG
        </Col>
        <Col xs={24} md={24} lg="auto" flex="0 0 auto">
          <Button>Click Me</Button>
        </Col>
        <Col xs={24} md={24} lg={24} flex="1">
          <Input />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <div>
            <div>Basic</div>
            <Spin />
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div>
            <div>Sizes</div>
            <Flex gap={16} align="center">
              <Spin size="small" />
              <Spin size="default" />
              <Spin size="large" />
            </Flex>
          </div>
        </Col>

        <Col xs={24} md={24}>
          <div>
            <div>Inside Container</div>
            <Spin spinning>
              <div style={{ height: 180 }} />
            </Spin>
          </div>
        </Col>
      </Row>
    </PageOuter>
  )
}

export default Dashboard
