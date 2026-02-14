import type { Meta, StoryObj } from '@storybook/react-vite'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import * as Icons from '@/assets/svgs'
import { StorySection, StorySubTitle } from '@/components/Stories/Stories.style'
import { flex } from '@/theme/styles/sharedStyles'
import { H4 } from '@/components/Utilities'

const meta = {
  title: 'Design System/Icons',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const IconCard = styled.div`
  ${flex('column', '12px', 'center', 'space-between')};
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: white;
  min-height: 80px;

  svg {
    max-width: 48px;
    max-height: 48px;
    width: 100%;
    height: auto;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`

export const AllIcons: Story = {
  render: () => {
    const entries = Object.entries(Icons)

    return (
      <Container>
        <StorySection>
          <StorySubTitle>Custom Icon Library</StorySubTitle>

          <Row gutter={[16, 16]}>
            {entries.map(([name, IconComponent]) => (
              <Col xs={12} sm={8} md={6} lg={4} key={name}>
                <IconCard>
                  <IconComponent />
                  <H4>{name}</H4>
                </IconCard>
              </Col>
            ))}
          </Row>
        </StorySection>
      </Container>
    )
  }
}
