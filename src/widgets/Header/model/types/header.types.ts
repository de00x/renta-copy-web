interface ISelectorProfileMenu {
    id: number
    text: string
    link?: string
}

interface IRoleAndNavProps {
    isVisibleRoleMenu: boolean
    isVisibleNavigationMenu: boolean
    currentUserRoleStatus: string | void

    handlerRoleChange(newRoleText: string): void

    handlerIsVisibleRoleOrNavModal(currentModal: string): void
}

export type {
    IRoleAndNavProps,
    ISelectorProfileMenu,
}