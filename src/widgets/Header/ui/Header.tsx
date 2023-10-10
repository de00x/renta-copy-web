import {classNames} from "shared"
import {FC, useState} from 'react'
import cls from './Header.module.scss'
import {useAuthCheck} from "shared/hooks"
import {useNavigate} from "react-router-dom";
import {HeaderForMobile} from "./HeaderForMobile"
import {HeaderForDesktop} from "./HeaderForDesktop"
import {ROLE_USER_LOCALSTORAGE_KEY} from 'shared/constants/localstorage'
import {useIsCurrentPage} from 'shared/hooks/useIsCurrentPage/useIsCurrentPage'

export const Header: FC = () => {
    const [isVisibleRoleMenu, setIsVisibleRoleMenu] = useState(false);
    const [isVisibleNavigationMenu, setIsVisibleNavigationMenu] = useState(false);
    const currentUserRoleStatus = localStorage.getItem(ROLE_USER_LOCALSTORAGE_KEY) ||
        localStorage.setItem('status', 'rented')

    const {currentPageIsAuth, currentPageIsVerifyEmail} = useIsCurrentPage();
    const isAuthUser = useAuthCheck()
    const navigate = useNavigate()
    const isAuthPage = currentPageIsAuth()
    const isVerifyEmailPage = currentPageIsVerifyEmail()

    const handlerRoleChange = (newRoleText: string) => {
        if (newRoleText !== currentUserRoleStatus) {
            localStorage.setItem('status', newRoleText);
            window.location.reload();
        }
    };

    const handlerIsVisibleRoleOrNavModal = (currentModal: string) => {
        switch (currentModal) {
            case 'role-menu': {
                if (isVisibleNavigationMenu) setIsVisibleNavigationMenu(false)
                setIsVisibleRoleMenu(prev => !prev)
                break
            }
            case 'nav-menu': {
                if (isVisibleRoleMenu) setIsVisibleRoleMenu(false)
                setIsVisibleNavigationMenu(prev => !prev)
                break
            }
            case 'destroy-all-modal': {
                setIsVisibleNavigationMenu(false)
                setIsVisibleRoleMenu(false)
            }
        }
    }

    const HEADER_WRAPPER_EXTRA_STYLES = classNames(
        cls['header-wrapper'],
        {
            [cls['header-wrapper-page-is-auth']]: isAuthPage,
            [cls['header-wrapper-user-is-auth']]: isAuthUser,
            [cls['header-wrapper-page-display-none']]: isVerifyEmailPage,
        }
        // Если user авторизован, то bg синий, иначе белый//
        // Если находимся на странице авторизации, то bg прозрачный //
        // Если находимся на странице подтверждения почты, то bg: none //
    );

    return (
        <div className={HEADER_WRAPPER_EXTRA_STYLES}>
            <HeaderForDesktop
                navigate={navigate}
                isAuthUser={isAuthUser}
                isAuthPage={isAuthPage}
                handlerRoleChange={handlerRoleChange}
                isVisibleRoleMenu={isVisibleRoleMenu}
                currentUserRoleStatus={currentUserRoleStatus}
                isVisibleNavigationMenu={isVisibleNavigationMenu}
                handlerIsVisibleRoleOrNavModal={handlerIsVisibleRoleOrNavModal}
            />
            <HeaderForMobile/>
        </div>
    );
};
