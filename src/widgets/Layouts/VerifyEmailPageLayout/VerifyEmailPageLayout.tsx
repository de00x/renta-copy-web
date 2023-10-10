import {FC, ReactNode} from "react";
import cls from './VerifyEmailPageLayout.module.scss'
import {ILayoutChildrenProps} from 'shared/interfaces'

export const VerifyEmailPageLayout: FC<ILayoutChildrenProps> = (props) => {
    const {children} = props

    return (
        <div className={cls['verify-layout']}>
            {children}
        </div>
    )
}