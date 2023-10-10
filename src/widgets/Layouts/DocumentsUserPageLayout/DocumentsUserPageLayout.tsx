import {ReactNode} from 'react';
import {ILayoutChildrenProps} from 'shared/interfaces'
import cls from './DocumentsUserPageLayout.module.scss'

export const DocumentsUserPageLayout = (props: ILayoutChildrenProps) => {
    const {children} = props

    return (
        <div className={cls['documents-user-wrapper']}>
            {children}
        </div>
    );
};

