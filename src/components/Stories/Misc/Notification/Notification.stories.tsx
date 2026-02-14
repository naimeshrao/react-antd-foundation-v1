import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex, notification } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { Button } from '@/components/Antd'

const meta = {
  title: 'Antd/Notification',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const NotificationDemo = () => {
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (
    type?: 'success' | 'info' | 'warning' | 'error'
  ) => {
    api[type || 'info']({
      message: 'Notification Title',
      description: 'This is the notification description.'
    })
  }

  return (
    <>
      {contextHolder}
      <Flex gap={12} wrap>
        <Button onClick={() => openNotification('info')}>Info</Button>
        <Button onClick={() => openNotification('success')}>Success</Button>
        <Button onClick={() => openNotification('error')}>Error</Button>
        <Button onClick={() => openNotification('warning')}>Warning</Button>
      </Flex>
    </>
  )
}

export const AllVersions: Story = {
  render: () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={16}>
        <StorySection>
          <StorySubTitle>Basic Types</StorySubTitle>
          <NotificationDemo />
        </StorySection>
      </Col>

      <Col xs={24} md={8}>
        <StorySection>
          <StorySubTitle>Custom Icon</StorySubTitle>
          <CustomIconDemo />
        </StorySection>
      </Col>

      <Col xs={24} md={16}>
        <StorySection>
          <StorySubTitle>Placement</StorySubTitle>
          <PlacementDemo />
        </StorySection>
      </Col>
    </Row>
  )
}

const CustomIconDemo = () => {
  const [api, contextHolder] = notification.useNotification()

  const open = () => {
    api.open({
      message: 'Custom Icon',
      description: 'Notification with custom icon.',
      icon: <CheckCircleOutlined />
    })
  }

  return (
    <>
      {contextHolder}
      <Button onClick={open}>Open Notification</Button>
    </>
  )
}

const PlacementDemo = () => {
  const [api, contextHolder] = notification.useNotification()

  const open = (
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  ) => {
    api.open({
      message: `Placement: ${placement}`,
      description: 'Notification placement example.',
      placement
    })
  }

  return (
    <>
      {contextHolder}
      <Flex gap={12} wrap>
        <Button onClick={() => open('topLeft')}>Top Left</Button>
        <Button onClick={() => open('topRight')}>Top Right</Button>
        <Button onClick={() => open('bottomLeft')}>Bottom Left</Button>
        <Button onClick={() => open('bottomRight')}>Bottom Right</Button>
      </Flex>
    </>
  )
}
