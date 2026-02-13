import {
  DatePicker,
  FloatingField,
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
import dayjs from 'dayjs'

const Login = () => {
  // Form Values
  const initialValues = {
    nameAllowClear: 'John Doe',
    name: 'Naimesh',
    select: 'jack',
    date: dayjs(),
    inputNumber: 42,
    textArea: 'This is pre-filled text.',
    password: 'Password1',
    time: dayjs(),
    range: [dayjs().subtract(1, 'day'), dayjs()]
  }

  return (
    <div>
      <Row gutter={[24, 16]}>
        <Col xs={24} lg={6}>
          <Form layout="vertical" initialValues={initialValues} disabled>
            <FloatingField name="nameAllowClear" label="Name (Allow Clear)">
              <Input allowClear />
            </FloatingField>

            <FloatingField name="name" label="Name">
              <Input />
            </FloatingField>

            <FloatingField name="select" label="Select User">
              <Select
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' }
                ]}
              />
            </FloatingField>

            <FloatingField name="date" label="Date Picker">
              <DatePicker />
            </FloatingField>

            <FloatingField name="inputNumber" label="Input Number">
              <InputNumber />
            </FloatingField>

            <FloatingField name="textArea" label="Text Area">
              <TextArea rows={4} />
            </FloatingField>

            <FloatingField name="password" label="Password">
              <Password />
            </FloatingField>

            <FloatingField name="time" label="Time Picker">
              <TimePicker />
            </FloatingField>

            <FloatingField name="range" label="Range Picker">
              <RangePicker />
            </FloatingField>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
