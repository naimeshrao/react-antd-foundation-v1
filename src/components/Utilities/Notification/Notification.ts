import { notification } from 'antd'
import type { NotificationPlacement } from 'antd/es/notification/interface'

const DEFAULT_PLACEMENT: NotificationPlacement = 'topRight'
const DEFAULT_DURATION = 4.5

interface NotificationOptions {
  message: string
  description?: string
}

export const Notification = {
  success: ({ message, description }: NotificationOptions) =>
    notification.success({
      message,
      description,
      placement: DEFAULT_PLACEMENT,
      duration: DEFAULT_DURATION
    }),
  error: ({ message, description }: NotificationOptions) =>
    notification.error({
      message,
      description,
      placement: DEFAULT_PLACEMENT,
      duration: DEFAULT_DURATION
    }),
  info: ({ message, description }: NotificationOptions) =>
    notification.info({
      message,
      description,
      placement: DEFAULT_PLACEMENT,
      duration: DEFAULT_DURATION
    }),
  warning: ({ message, description }: NotificationOptions) =>
    notification.warning({
      message,
      description,
      placement: DEFAULT_PLACEMENT,
      duration: DEFAULT_DURATION
    })
}
