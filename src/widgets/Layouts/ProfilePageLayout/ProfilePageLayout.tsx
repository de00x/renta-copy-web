import {FC} from "react";
import cls from './ProfilePageLayout.module.scss'
import {ILayoutChildrenProps} from 'shared/interfaces'

export const ProfilePageLayout: FC<ILayoutChildrenProps> = (props) => {
    const {children} = props

    return (
        <div className={cls['profile-page-layout']}>
            {children}
        </div>
    )
}
