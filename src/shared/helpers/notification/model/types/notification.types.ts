type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    message?: string
    duration?: number
    description?: string
    onClose?: () => void
    placement?: Placement
    messageStyles?: string
    type?: NotificationType
    containerStyles?: string
    notificationKey?: string
    descriptionStyles?: string
}

export type {NotificationProps}