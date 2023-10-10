import {FC} from "react";
import cls from './LoginPageLayout.module.scss'
import {ILayoutChildrenProps} from 'shared/interfaces'

export const LoginPageLayout: FC<ILayoutChildrenProps> = (props) => {
    const {children} = props

    return (
        <div className={cls['login-page-wrapper']}>
            {children}
        </div>
    )

}