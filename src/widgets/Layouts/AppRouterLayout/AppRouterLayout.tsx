import {FC} from "react";
import cls from "./AppRouterLayout.module.scss";
import {ILayoutChildrenProps} from 'shared/interfaces'

export const AppRouterLayout: FC<ILayoutChildrenProps> = (props) => {
    const {children} = props

    return (
        <div className={cls['app-router-layout']}>
            {children}
        </div>
    )
}