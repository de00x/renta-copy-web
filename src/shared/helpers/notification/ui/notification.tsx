import {notification} from 'antd';
import {Text} from "shared/ui/Text";
import cls from './notification.module.scss'
import {NotificationProps} from '../model/types/notification.types'

export const showNotification = (props: NotificationProps) => {
    const {
        onClose,
        message,
        duration = 5,
        type = 'info',
        messageStyles,
        notificationKey,
        containerStyles,
        description = '',
        descriptionStyles,
        placement = 'topRight',
    } = props;

    notification[type]({
        onClose,
        duration,
        placement,
        key: notificationKey,
        message: <Text className={cls[messageStyles]}>{message}</Text>,
        description: <Text className={cls[descriptionStyles]}>{description}</Text>,
        className: `${cls['notification-default-container']} ${cls[containerStyles]}`
    });
};

export const destroyNotifications = () => {
    notification.destroy();
};