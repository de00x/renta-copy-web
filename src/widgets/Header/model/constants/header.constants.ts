import {PrivateRoutePath, RoutePath} from "shared/config/route";
import {ID_LOCALSTORAGE_KEY} from "shared/constants/localstorage";
import {ISelectorProfileMenu} from "widgets/Header/model/types/header.types";

const linkTo = {
    profile: `${PrivateRoutePath.profile}${localStorage.getItem(ID_LOCALSTORAGE_KEY)}`,
    settings: PrivateRoutePath["settings-profile"],
    main: '/'
}

const selectorProfileMenu: ISelectorProfileMenu[] = [
    {id: 1, text: 'Личный кабинет', link: linkTo.profile},
    {id: 2, text: 'Настройки', link: linkTo.settings},
    {id: 3, text: 'Документы', link: linkTo.main},
    {id: 4, text: 'О программе', link: linkTo.main},
    {id: 5, text: 'Вопрос - ответ', link: linkTo.main},
    {id: 6, text: 'Техподдержка', link: linkTo.main},
    {id: 7, text: 'Выйти', link: RoutePath.renta},
]

const selectorRoleStatus = {
    owner: 'Арендодатель',
    rented: 'Арендатор'
}

export {
    linkTo,
    selectorRoleStatus,
    selectorProfileMenu,
}