import {
  Alert,
  Avatar,
  Button,
  Card,
  Checkbox,
  Collapse,
  DatePicker,
  Dropdown,
  Form,
  FormItem,
  Input,
  Menu,
  Modal,
  Pagination,
  Radio,
  Select,
  Skeleton,
  Spin,
  Switch,
  Table,
  Tabs,
  Tag,
  Tooltip
} from '@/components'
import { IconUser } from '@tabler/icons-react'
import { CollapseProps, DatePickerProps, MenuProps, TabsProps } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface DashboardProps {
  message?: string
}

type MenuItem = Required<MenuProps>['items'][number]

const itemsSideMenu: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' }
        ]
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' }
        ]
      }
    ]
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' }
        ]
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' }
    ]
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' }
    ]
  }
]

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

  const onClickMenu: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
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

  return (
    <div>
      <h1>{message}</h1>
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
        style={{ width: 120 }}
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
      <Tag>Tag 1</Tag>
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
      <Menu
        onClick={onClickMenu}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={itemsSideMenu}
      />
      <br />
      <DatePicker onChange={onChangeDP} />
      <br />
      <Collapse
        items={itemsCollapse}
        defaultActiveKey={['1']}
        onChange={onChangeCol}
      />
      <br />
      <Card title="Default Card" cardType="default" style={{ width: 200 }}>
        This is the default card content.
      </Card>
      <Card title="Outlined Card" cardType="outlined" style={{ width: 200 }}>
        This is an outlined card content.
      </Card>
      <Card title="Elevated Card" cardType="elevated" style={{ width: 200 }}>
        This is an elevated card content.
      </Card>
      <br />
      <Avatar size={64} icon={<IconUser />} />
    </div>
  )
}

export default Dashboard
