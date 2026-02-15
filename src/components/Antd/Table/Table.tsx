import { Table as AntTable } from 'antd'
import type { TableProps } from 'antd'
import styled from 'styled-components'

const TableStyled = styled.div``

export const Table = <T extends object>(props: TableProps<T>) => {
  return (
    <TableStyled>
      <AntTable<T> {...props} />
    </TableStyled>
  )
}

// Static properties
Table.SELECTION_ALL = AntTable.SELECTION_ALL
Table.SELECTION_INVERT = AntTable.SELECTION_INVERT
Table.SELECTION_NONE = AntTable.SELECTION_NONE
Table.Column = AntTable.Column
Table.ColumnGroup = AntTable.ColumnGroup
Table.Summary = AntTable.Summary
