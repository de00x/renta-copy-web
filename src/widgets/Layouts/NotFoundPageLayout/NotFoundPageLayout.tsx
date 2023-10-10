import {FC} from "react";
import cls from './NotFoundPageLayout.module.scss'
import {ILayoutChildrenProps} from 'shared/interfaces'

export const NotFoundPageLayout: FC<ILayoutChildrenProps> = (props) => {
    const {children} = props

    return (
        <div className={cls['not-found-page-wrapper']}>
            {children}
        </div>
    )
}