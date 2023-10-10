import {Map} from 'entities/Map';
import {KeysPage} from 'pages/Keys';
import {MainPage} from 'pages/Main';
import {AdminPage} from 'pages/Flats';
import {DealsPage} from 'pages/Deals';
import {ProfilePage} from 'pages/ProfilePage';
import {RouteProps} from 'react-router-dom';
import {AddFlatPage} from 'pages/AddFlatPage';
import {SettingsUserPage} from 'pages/SettingsUserPage';
import {EditPasswordPage} from 'pages/EditPasswordPage';
import {AppRoutes, RoutePath} from 'shared/config/route/route';
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutesPrivate {
    MAP = 'map',
    MAIN = 'renta',
    KEYS = 'keys',
    ADMIN = 'admin',
    DEALS = 'deals',
    INITIAL = 'initial',
    PROFILE = 'profile',
    ADDFLAT = 'addflat',
    NOT_FOUND = 'not_found',
    NOTIFICATION = 'notification',
    EDITPASSWORD = 'editpassword',
    SETTINGSPROFILE = 'settings-profile',
}

export const PrivateRoutePath: Record<AppRoutesPrivate, string> = {
    [AppRoutes.INITIAL]: '/',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.MAIN]: '/renta',
    [AppRoutesPrivate.MAP]: '/map',
    [AppRoutesPrivate.KEYS]: '/keys',
    [AppRoutesPrivate.ADMIN]: '/admin',
    [AppRoutesPrivate.DEALS]: '/deals',
    [AppRoutesPrivate.ADDFLAT]: '/addflat',
    [AppRoutesPrivate.PROFILE]: '/profile/',
    [AppRoutesPrivate.NOTIFICATION]: '/notification',
    [AppRoutesPrivate.EDITPASSWORD]: '/editpassword',
    [AppRoutesPrivate.SETTINGSPROFILE]: '/settings-profile',
};

export const routeConfigPrivate: Record<AppRoutesPrivate, RouteProps> = {
    [AppRoutesPrivate.NOT_FOUND]: {
        path: PrivateRoutePath.not_found,
        element: <NotFoundPage/>,
    },
    [AppRoutesPrivate.INITIAL]: {
        path: PrivateRoutePath.initial,
        element: <MainPage/>,
    },
    [AppRoutesPrivate.PROFILE]: {
        path: `${PrivateRoutePath.profile}:id`,
        element: <ProfilePage/>,
    },
    [AppRoutesPrivate.SETTINGSPROFILE]: {
        path: PrivateRoutePath["settings-profile"],
        element: <SettingsUserPage/>,
    },
    [AppRoutesPrivate.NOTIFICATION]: {
        path: PrivateRoutePath.notification,
        element: <EditPasswordPage/>,
    },
    [AppRoutesPrivate.EDITPASSWORD]: {
        path: PrivateRoutePath.editpassword,
        element: <EditPasswordPage/>,
    },
    [AppRoutesPrivate.ADDFLAT]: {
        path: PrivateRoutePath.addflat,
        element: <AddFlatPage/>,
    },
    [AppRoutesPrivate.ADMIN]: {
        path: PrivateRoutePath.admin,
        element: <AdminPage/>,
    },
    [AppRoutesPrivate.MAP]: {
        path: PrivateRoutePath.map,
        element: <Map/>,
    },
    [AppRoutesPrivate.KEYS]: {
        path: PrivateRoutePath.keys,
        element: <KeysPage/>,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.renta,
        element: <MainPage/>,
    },
    [AppRoutesPrivate.DEALS]: {
        path: PrivateRoutePath.deals,
        element: <DealsPage/>,
    },
};
