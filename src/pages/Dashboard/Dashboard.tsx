import {
  Alert,
  AppNotification,
  Avatar,
  Button,
  Card,
  Checkbox,
  Collapse,
  ConfirmModal,
  DatePicker,
  Dropdown,
  Empty,
  FloatButton,
  FloatingInput,
  FormItem,
  H1,
  H2,
  H3,
  H4,
  H5,
  Input,
  Modal,
  Pagination,
  Radio,
  Select,
  Skeleton,
  Spin,
  Statistic,
  Switch,
  Table,
  Tabs,
  Tag,
  TextL,
  TextM,
  TextS,
  TextXL,
  TextXS,
  Upload
} from '@/components'
import {
  Icon3dRotate,
  IconArrowDown,
  IconArrowUp,
  IconBrandTwitter,
  IconUpload,
  IconUser
} from '@tabler/icons-react'
import {
  Col,
  CollapseProps,
  DatePickerProps,
  Flex,
  Form,
  MenuProps,
  Row,
  TabsProps,
  Tooltip,
  UploadProps
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface DashboardProps {
  message?: string
}

const Dashboard = ({ message = 'Dashboard' }: DashboardProps) => {
  const { t } = useTranslation('account')

  const { TextArea } = Input

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Profile'
    },
    {
      key: '2',
      label: 'Logout'
    }
  ]

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  const onChangeTabs = (key: string) => {
    console.log(key)
  }

  const itemsTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1'
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2'
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3'
    }
  ]

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

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onChangeDP: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  const onChangeCol = (key: string | string[]) => {
    console.log(key)
  }

  const itemsCollapse: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>text 1</p>
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>text 2</p>
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>text 3</p>
    }
  ]

  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
    }
  }

  const showNotification = () => {
    AppNotification.success({
      message: 'Saved Successfully',
      description: 'Your data has been updated.'
    })
  }

  // Confirm Modal
  const [openCM, setOpenCM] = useState(false)

  const handleCMOk = () => {
    console.log('Confirmed')
    setOpenCM(false)
  }

  const handleCMCancel = () => {
    setOpenCM(false)
  }

  const [form] = Form.useForm()

  return (
    <div>
      <Button onClick={showNotification}>Show Notification</Button>
      <h1>{message}</h1>
      <Skeleton variant="h1" paragraph={false} />
      <Skeleton variant="h1" paragraph={false} fullWidth />
      <p>{t('Welcome')}</p>
      <Button type="primary" size="large">
        Primary
      </Button>
      <br />
      <Alert
        title="Warning Title"
        type="warning"
        closable={{ closeIcon: true }}
      />
      <br />
      <Checkbox checked>Remember me</Checkbox>
      <br />
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>Open Menu</a>
      </Dropdown>
      <br />
      <Radio value="A">Option A</Radio>
      <br />
      <Select
        defaultValue="lucy"
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true }
        ]}
      />
      <br />
      <Skeleton active paragraph={{ rows: 4 }} />
      <br />
      <Spin />
      <br />
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
      <Form>
        <Switch defaultChecked onChange={onChange} />
        <br />
        <FormItem
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input username!' }]}
        >
          <Input placeholder="Basic usage" />
        </FormItem>
        <br />
        <TextArea rows={4} />
      </Form>
      <br />
      <Flex gap={20}>
        <Tag color="default" closeIcon icon={<IconBrandTwitter />}>
          Default
        </Tag>
        <Tag color="success">Success</Tag>
        <Tag color="error">Error</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="processing">Processing</Tag>
      </Flex>
      <br />
      <Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChangeTabs} />
      <br />
      <Table dataSource={dataSource} columns={columns} />
      <br />
      <Pagination defaultCurrent={1} total={50} />
      <br />
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
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
      <DatePicker onChange={onChangeDP} />
      <br />
      <Collapse
        items={itemsCollapse}
        defaultActiveKey={['1']}
        onChange={onChangeCol}
      />
      <br />
      <Card cardType="default">This is the default card content.</Card>
      <Card title="Form Card" cardType="form">
        This is an outlined card content.
      </Card>
      <Card title="List Card" cardType="list">
        This is an elevated card content.
      </Card>
      <Card title="KPI Card" cardType="kpi">
        This is an elevated card content.
      </Card>
      <br />
      <Avatar size={64} icon={<IconUser />} />
      <br />
      <FloatButton shape="circle" type="primary" icon={<Icon3dRotate />} />
      <br />
      <Upload {...props}>
        <Button icon={<IconUpload />}>Click to Upload</Button>
      </Upload>
      <br />
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data found" />
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
          <Input placeholder="Type here" />
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

      <Row gutter={[24, 16]}>
        <Col xs={24} lg={6}>
          <H1>H1 - Sample Title</H1>
          <H2>H2 - Sample Title</H2>
          <H3>H3 - Sample Title</H3>
          <H4>H4 - Sample Title</H4>
          <H5>H5 - Sample Title</H5>
        </Col>
        <Col xs={24} lg={8}>
          <TextXL>TextXL - Sample body text example</TextXL>
          <TextL>TextL - Sample body text example</TextL>
          <TextM>TextM - Sample body text example</TextM>
          <TextS>TextS - Sample body text example</TextS>
          <TextXS>TextXS - Sample body text example</TextXS>
        </Col>
        <Col xs={24} lg={5}>
          <TextXL color="primary">Color: primary</TextXL>
          <TextXL color="dark">Color: dark</TextXL>
          <TextXL color="muted">Color: muted</TextXL>
        </Col>
        <Col xs={24} lg={5}>
          <TextXL weight={300}>Weight: 300</TextXL>
          <TextXL weight={400}>Weight: 400 (Default)</TextXL>
          <TextXL weight={500}>Weight: 500</TextXL>
          <TextXL weight={600}>Weight: 600</TextXL>
          <TextXL weight={700}>Weight: 700</TextXL>
          <TextXL weight={800}>Weight: 800</TextXL>
        </Col>
      </Row>

      <Form form={form} layout="vertical" requiredMark={false}>
        <FloatingInput
          name="Name"
          label="Name"
          required
          rules={[{ required: true, message: 'Name is required' }]}
        >
          <Input allowClear />
        </FloatingInput>

        <FloatingInput
          mb={0}
          label="Gender"
          name="Gender"
          required
          rules={[
            { required: true, message: 'Gender is required' },
            { type: 'email', message: 'Enter valid Gender' }
          ]}
        >
          <Input allowClear />
        </FloatingInput>
      </Form>
    </div>
  )
}

export default Dashboard
