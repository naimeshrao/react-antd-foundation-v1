import { DatePicker as AntDatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
import type { Dayjs } from 'dayjs'
import styled from 'styled-components'

const { RangePicker: AntRangePicker } = AntDatePicker

export const DatePicker = styled(AntDatePicker)<DatePickerProps<Dayjs>>``

export const RangePicker = styled(AntRangePicker)<DatePickerProps<Dayjs>>``
