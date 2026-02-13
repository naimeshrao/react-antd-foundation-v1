import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Password,
  RangePicker,
  Select,
  TextArea,
  TimePicker
} from '@/components'
import { Col, Row } from 'antd'

const Login = () => {
  return (
    <div>
      <Row gutter={[24, 16]}>
        <Col xs={24} lg={6}>
          <Form layout="vertical" disabled>
            <Form.Item name="nameAllowClear" label="Name (Allow Clear)">
              <Input allowClear />
            </Form.Item>

            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>

            <Form.Item name="select" label="Select User">
              <Select
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' }
                ]}
              />
            </Form.Item>

            <Form.Item name="date" label="Date Picker">
              <DatePicker />
            </Form.Item>

            <Form.Item name="inputNumber" label="Input Number">
              <InputNumber />
            </Form.Item>

            <Form.Item name="textArea" label="Text Area">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Password />
            </Form.Item>

            <Form.Item name="time" label="Time Picker">
              <TimePicker />
            </Form.Item>

            <Form.Item name="range" label="Range Picker">
              <RangePicker />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
