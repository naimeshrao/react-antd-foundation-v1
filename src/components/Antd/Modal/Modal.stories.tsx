import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import type { ModalProps } from 'antd'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    centered: { control: 'boolean' },
    maskClosable: { control: 'boolean' },
    destroyOnClose: { control: 'boolean' }
  },
  args: {
    centered: false,
    maskClosable: true,
    destroyOnClose: false
  }
} satisfies Meta<ModalProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal
          {...args}
          open={open}
          onCancel={() => setOpen(false)}
          onOk={() => setOpen(false)}
          title="Modal Title"
        >
          Modal content goes here.
        </Modal>
      </>
    )
  }
}

export const AllVersions: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    return (
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Default</StorySubTitle>
            <Button type="primary" onClick={() => setOpen1(true)}>
              Open Modal
            </Button>
            <Modal
              open={open1}
              onCancel={() => setOpen1(false)}
              onOk={() => setOpen1(false)}
              title="Default Modal"
            >
              Basic modal content.
            </Modal>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Centered</StorySubTitle>
            <Button onClick={() => setOpen2(true)}>Open Centered</Button>
            <Modal
              centered
              open={open2}
              onCancel={() => setOpen2(false)}
              onOk={() => setOpen2(false)}
              title="Centered Modal"
            >
              This modal is vertically centered.
            </Modal>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Custom Footer</StorySubTitle>
            <Button onClick={() => setOpen3(true)}>Open Custom</Button>
            <Modal
              open={open3}
              onCancel={() => setOpen3(false)}
              footer={[
                <Button key="cancel" onClick={() => setOpen3(false)}>
                  Cancel
                </Button>,
                <Button key="submit" type="primary">
                  Save
                </Button>
              ]}
              title="Custom Footer Modal"
            >
              Custom footer buttons example.
            </Modal>
          </StorySection>
        </Col>

        <Col xs={24} md={12}>
          <StorySection>
            <StorySubTitle>Confirm Modal</StorySubTitle>
            <Button
              danger
              onClick={() =>
                Modal.confirm({
                  title: 'Are you sure?',
                  content: 'This action cannot be undone.'
                })
              }
            >
              Show Confirm
            </Button>
          </StorySection>
        </Col>
      </Row>
    )
  }
}
