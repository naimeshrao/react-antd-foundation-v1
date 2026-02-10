import { notification } from 'antd'
import type { NotificationPlacement } from 'antd/es/notification/interface'

const DEFAULT_PLACEMENT: NotificationPlacement = 'topRight'
const DEFAULT_DURATION = 4.5

interface Options {
  message: string
  description?: string
}

const show = (
  type: 'success' | 'error' | 'info' | 'warning',
  options: Options
) =>
  notification[type]({
    ...options,
    placement: DEFAULT_PLACEMENT,
    duration: DEFAULT_DURATION
  })

export const AppNotification = {
  success: (options: Options) => show('success', options),
  error: (options: Options) => show('error', options),
  info: (options: Options) => show('info', options),
  warning: (options: Options) => show('warning', options)
}
