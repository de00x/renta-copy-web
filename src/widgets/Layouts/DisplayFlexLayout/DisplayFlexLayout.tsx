import {classNames} from "shared";
import {FC, ReactNode} from "react";
import cls from './DisplayFlexLayout.module.scss'

interface IDisplayFlexLayoutProps {
    children: ReactNode
    additionalStyles?: string
}

export const DisplayFlexLayout: FC<IDisplayFlexLayoutProps> = (props) => {
    const {children, additionalStyles} = props

    const DISPLAY_FLEX_LAYOUT_STYLES = classNames(
        cls['display-flex-layout'],
        {
            [additionalStyles]: additionalStyles
        })

    return (
        <div className={DISPLAY_FLEX_LAYOUT_STYLES}>
            {children}
        </div>
    )
}