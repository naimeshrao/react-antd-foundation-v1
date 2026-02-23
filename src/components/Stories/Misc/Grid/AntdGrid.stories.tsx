import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import styled from 'styled-components'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'

const meta = {
  title: 'Antd/Grid',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const Box = styled.div`
  background: lightblue;
  color: black;
  padding: 12px 8px;
  text-align: center;
  border-radius: 6px;
`

export const AllVersions: Story = {
  render: () => {
    const formData = { userId: true }

    return (
      <Flex vertical gap={16}>
        <StorySection>
          <StorySubTitle>Row & Columns</StorySubTitle>
          <Row gutter={[24, 16]} justify="space-between" wrap>
            <Col span={6}>
              <Box>6</Box>
            </Col>
            <Col span={6}>
              <Box>6</Box>
            </Col>
            <Col span={6}>
              <Box>6</Box>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12} lg={6}>
              <Box>xs 24 / md 12 / lg 6</Box>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Box>Responsive</Box>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
              <Box>Offset on LG</Box>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} lg={{ flex: 'none' }}>
              <Box>F-None asasasa sasas</Box>
            </Col>
            <Col xs={24} md={24} lg="auto" flex="0 0 auto">
              <Box>F-Auto asasasa sasas</Box>
            </Col>
            <Col xs={24} md={24} lg={24} flex={1}>
              <Box>Flex 1</Box>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} lg={formData.userId ? 24 : 12}>
              <Box>Conditional Span</Box>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={{ order: 2 }} sm={{ order: 1 }} span={12}>
              <Box>Order 2 → 1</Box>
            </Col>
            <Col xs={{ order: 1 }} sm={{ order: 2 }} span={12}>
              <Box>Order 1 → 2</Box>
            </Col>
          </Row>
        </StorySection>
      </Flex>
    )
  }
}
