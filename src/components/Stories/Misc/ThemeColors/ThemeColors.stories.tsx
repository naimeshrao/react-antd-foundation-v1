import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col, Flex } from 'antd'
import styled from 'styled-components'
import { mainDarkColors, mainLightColors } from '@/theme/styles/colors'
import { StorySubTitle } from '../../Stories.style'
import { TextM } from '@/components/Utilities'
import { Paragraph } from '@/components/Antd'

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const Wrapper = styled.div`
  padding: 24px;
`

const ThemeColumn = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  padding: 12px;
  min-height: 100vh;
`

const ColorCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid gray;
  margin: 0;
`

const ColorPreview = styled.div<{ color: string }>`
  height: 50px;
  background: ${({ color }) => color};
`

const ColorInfo = styled.div`
  padding: 8px 12px;
  font-size: 12px;
`

const renderColors = (colors: Record<string, string>) =>
  Object.entries(colors).map(([name, value]) => (
    <ColorCard key={name}>
      <ColorPreview color={value} />
      <ColorInfo>
        <Flex gap={12} justify="space-between">
          <Paragraph copyable>{name}</Paragraph>
          <TextM color="muted">{value}</TextM>
        </Flex>
      </ColorInfo>
    </ColorCard>
  ))

export const SideBySide: Story = {
  render: () => (
    <Wrapper>
      <Row gutter={24}>
        <Col xs={24} md={12}>
          <ThemeColumn bg="#ffffff">
            <Flex gap={12} vertical>
              <StorySubTitle>Light Theme</StorySubTitle>
              {renderColors(mainLightColors)}
            </Flex>
          </ThemeColumn>
        </Col>

        <Col xs={24} md={12}>
          <ThemeColumn bg="#121212">
            <Flex gap={12} vertical>
              <StorySubTitle>Dark Theme</StorySubTitle>
              {renderColors(mainDarkColors)}
            </Flex>
          </ThemeColumn>
        </Col>
      </Row>
    </Wrapper>
  )
}
