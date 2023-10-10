import {NavigateFunction} from "react-router-dom";

interface IHeaderRightBlockProps {
    isAuthPage: boolean
    isAuthUser: boolean
    navigate: NavigateFunction
    isVisibleRoleMenu: boolean
    isVisibleNavigationMenu: boolean
    currentUserRoleStatus: string | void

    handlerIsVisibleRoleOrNavModal(currentModal: string): void

    handlerRoleChange(newRoleText: string): void
}

interface IHeaderForDesktopProps {
    isAuthPage: boolean
    isAuthUser: boolean
    navigate: NavigateFunction
    isVisibleRoleMenu: boolean
    isVisibleNavigationMenu: boolean
    currentUserRoleStatus: string | void

    handlerIsVisibleRoleOrNavModal(currentModal: string): void

    handlerRoleChange(newRoleText: string): void

}

export type {
    IHeaderRightBlockProps,
    IHeaderForDesktopProps
}