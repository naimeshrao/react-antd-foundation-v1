import { PageOuter, Table, TableEmpty, TableSortIcon } from '@/components'
import type { TableColumnsType, TableProps } from 'antd'
import { Key, useState } from 'react'

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection']

interface DataType {
  key: Key
  name: string
  age: number
  address: string
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'left',
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortIcon: ({ sortOrder }) => <TableSortIcon sortOrder={sortOrder} />,
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    align: 'center',
    filters: [
      { text: '32', value: 32 },
      { text: '42', value: 42 }
    ],
    onFilter: (value, record: DataType) => record.age === value,
    sorter: (a, b) => a.age - b.age,
    width: 120
  },
  {
    title: 'Address',
    dataIndex: 'address',
    align: 'left',
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.address.includes(value as string)
  }
]

const dataSource = Array.from({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`
}))

const UserList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnWidth: 60,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  return (
    <PageOuter>
      <Table<DataType>
        // loading
        locale={{ emptyText: <TableEmpty description="No user found" /> }}
        tableLayout="fixed"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 'max-content', y: '100%' }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`
        }}
        expandable={{
          expandedRowRender: (record) => <p>{record.address}</p>
        }}
      />
    </PageOuter>
  )
}

export default UserList
