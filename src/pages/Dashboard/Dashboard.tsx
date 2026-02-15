import {
  Button,
  Card,
  ConfirmModal,
  Input,
  Modal,
  PageOuter,
  Spin,
  Statistic,
  Table,
  Upload
} from '@/components'
import { IconArrowDown, IconArrowUp, IconUpload } from '@tabler/icons-react'
import { Col, Flex, Row, UploadProps } from 'antd'
import { useState } from 'react'
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

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text'
    }
  }

  // Confirm Modal
  const [openCM, setOpenCM] = useState(false)

  const handleCMOk = () => {
    setOpenCM(false)
  }

  const handleCMCancel = () => {
    setOpenCM(false)
  }

  return (
    <PageOuter heading="Dashboard">
      <p>{t('Welcome')}</p>

      <Table dataSource={dataSource} columns={columns} />
      <br />

      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <br />
      <Upload {...props}>
        <Button icon={<IconUpload />}>Click to Upload</Button>
      </Upload>

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

      <Button onClick={() => setOpenCM(true)}>Open Modal</Button>

      <ConfirmModal
        open={openCM}
        onOk={handleCMOk}
        onCancel={() => handleCMCancel()}
        title="Delete?"
        okText="Delete"
        cancelText="Cancel"
      >
        Are you sure you want to delete?
      </ConfirmModal>

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
