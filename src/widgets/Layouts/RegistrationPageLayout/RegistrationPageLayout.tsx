import {FC} from "react";
import cls from './RegistrationPageLayout.module.scss'
import {ILayoutChildrenProps} from "shared/interfaces";

export const RegistrationPageLayout: FC<ILayoutChildrenProps> = (props) => {

    const {children} = props

    return (
        <div className={cls['registration-page-layout']}>
            {children}
        </div>
    )
}