import React, {FC} from "react";
import {Text} from "shared/ui/Text";
import {ILayoutChildrenProps} from 'shared/interfaces'
import cls from './SettingsUserPageLayout.module.scss'

export const SettingsUserPageLayout: FC<ILayoutChildrenProps> = (props) => {
    const {children} = props

    return (
        <div className={cls['settings-user-page-layout-wrapper']}>
            <Text className={cls['user-account-settings-title']}>Настройки</Text>
            {children}
        </div>
    )
}