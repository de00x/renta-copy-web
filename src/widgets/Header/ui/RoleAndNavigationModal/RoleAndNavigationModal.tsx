import {FC} from "react";
import {classNames} from "shared";
import {Text} from "shared/ui/Text";
import {Link} from "react-router-dom";
import cls from './RoleAndNavigationModal.module.scss'
import {IRoleAndNavProps} from '../../model/types/header.types'
import {selectorRoleStatus, selectorProfileMenu} from "widgets/Header/model/constants/header.constants";

export const RoleAndNavigationModal: FC<IRoleAndNavProps> = (props) => {
    const {
        handlerRoleChange,
        isVisibleRoleMenu,
        currentUserRoleStatus,
        isVisibleNavigationMenu,
        handlerIsVisibleRoleOrNavModal
    } = props

    const ROLE_AND_NAV_WRAPPER_STYLES = classNames(
        cls['role-and-nav-wrapper'],
        {
            [cls['role-and-nav-modal-active']]: isVisibleRoleMenu
        })

    return (
        <div className={ROLE_AND_NAV_WRAPPER_STYLES}>
            <button
                onClick={() => handlerIsVisibleRoleOrNavModal('role-menu')}
            >
                {currentUserRoleStatus === 'owner' ? selectorRoleStatus.owner : selectorRoleStatus.rented}
            </button>
            {
                isVisibleRoleMenu &&
                <div className={cls['modal-role-selector-container']}>
                    <Text
                        onClick={() => handlerRoleChange('rented')}
                    >
                        {selectorRoleStatus.rented}
                    </Text>
                    <hr/>
                    <Text
                        onClick={() => handlerRoleChange('owner')}
                    >
                        {selectorRoleStatus.owner}
                    </Text>
                </div>
            }
            {
                isVisibleNavigationMenu &&
                <div className={cls['modal-menu-selector-container']}>
                    {
                        selectorProfileMenu.map((menu) =>
                            <Link
                                key={menu.id}
                                to={menu.link}
                                onClick={() => handlerIsVisibleRoleOrNavModal('destroy-all-modal')}
                            >
                                {menu.text}
                            </Link>
                        )}
                </div>
            }
        </div>
    )
}