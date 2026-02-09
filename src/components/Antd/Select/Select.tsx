import { Select as AntdSelect } from 'antd'
import type { SelectProps as AntdSelectProps } from 'antd'
import styled from 'styled-components'

const BaseSelect = styled(AntdSelect)`` as typeof AntdSelect

function Select<ValueType = any>(props: AntdSelectProps<ValueType>) {
  return <BaseSelect {...props} />
}

export default Select
