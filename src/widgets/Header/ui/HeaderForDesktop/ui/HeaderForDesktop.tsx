import {FC} from "react";
import {Text} from "shared/ui/Text";
import cls from './HeaderForDesktop.module.scss'
import {HeaderLeftBlock} from "./HeaderLeftBlock/HeaderLeftBlock";
import {HeaderRightBlock} from "./HeaderRightBlock/HeaderRightBlock";
import {IHeaderForDesktopProps} from '../model/types/header-for-desktop.types'

export const HeaderForDesktop: FC<IHeaderForDesktopProps> = (props) => {
    const {
        navigate,
        isAuthUser,
        isAuthPage,
        isVisibleRoleMenu,
        handlerRoleChange,
        currentUserRoleStatus,
        isVisibleNavigationMenu,
        handlerIsVisibleRoleOrNavModal
    } = props

    return (
        <div className={cls['header-container-for-desktop']}>
            <HeaderLeftBlock/>
            <Text className={cls['header-title-text']}>Flat Renta</Text>
            <HeaderRightBlock
                navigate={navigate}
                isAuthPage={isAuthPage}
                isAuthUser={isAuthUser}
                handlerRoleChange={handlerRoleChange}
                isVisibleRoleMenu={isVisibleRoleMenu}
                currentUserRoleStatus={currentUserRoleStatus}
                isVisibleNavigationMenu={isVisibleNavigationMenu}
                handlerIsVisibleRoleOrNavModal={handlerIsVisibleRoleOrNavModal}
            />
        </div>
    )
}