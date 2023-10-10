import {FC} from "react";
import {classNames} from "shared";
import {Text} from "shared/ui/Text";
import {useDecodeIdUserJWT} from "shared/hooks";
import cls from "./HeaderRightBlock.module.scss";
import UserAccountSVG from 'assets/icons/user-account.svg?react'
import {ACCESS_LOCALSTORAGE_KEY} from "shared/constants/localstorage";
import {IHeaderRightBlockProps} from '../../model/types/header-for-desktop.types'
import {RoleAndNavigationModal} from "widgets/Header/ui/RoleAndNavigationModal/RoleAndNavigationModal";

export const HeaderRightBlock: FC<IHeaderRightBlockProps> = (props) => {
    const {
        navigate,
        isAuthPage,
        isAuthUser,
        handlerRoleChange,
        isVisibleRoleMenu,
        currentUserRoleStatus,
        isVisibleNavigationMenu,
        handlerIsVisibleRoleOrNavModal
    } = props

    const HEADER_USER_ACCOUNT_BTN_STYLES = classNames(
        cls['header-user-account-btn'],
        {
            [cls['header-user-account-btn-active']]: isVisibleNavigationMenu
        })

    return (
        <div className={cls['header-right-block-container']}>
            {!isAuthPage && !isAuthUser &&
            <>
                <Text
                    className={cls['header-btn-sign-in']}
                    onClick={() => navigate('/login')}
                >
                    Войти
                </Text>
                <Text
                    className={cls['header-btn-sign-up']}
                    onClick={() => navigate('/registration')}
                >
                    Регистрация
                </Text>
            </>
            }
            {
                isAuthUser &&
                <>
                    <RoleAndNavigationModal
                        handlerRoleChange={handlerRoleChange}
                        isVisibleRoleMenu={isVisibleRoleMenu}
                        currentUserRoleStatus={currentUserRoleStatus}
                        isVisibleNavigationMenu={isVisibleNavigationMenu}
                        handlerIsVisibleRoleOrNavModal={handlerIsVisibleRoleOrNavModal}
                    />
                    <div
                        className={HEADER_USER_ACCOUNT_BTN_STYLES}
                        onClick={() => handlerIsVisibleRoleOrNavModal('nav-menu')}
                    >
                        <UserAccountSVG/>
                    </div>
                </>
            }
        </div>
    )
}