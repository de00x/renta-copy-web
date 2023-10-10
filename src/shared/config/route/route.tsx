import {MapPage} from 'pages/Map';
import {MainPage} from 'pages/Main';
import {LoginPage} from "pages/LoginPage";
import {RouteProps} from 'react-router-dom';
import {NotFoundPage} from 'pages/NotFoundPage';
import {VerifyEmailPage} from 'pages/VerifyEmailPage';
import {RegistrationPage} from "pages/RegistrationPage";

export enum AppRoutes {
    MAIN = 'renta',
    VERIFYEMAIL = "verify-email",
    REGISTRATION = 'registration',
    LOGIN = 'login',
    MAP = 'map',
    NOT_FOUND = 'not_found',
    INITIAL = 'initial',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/renta',
    [AppRoutes.VERIFYEMAIL]: '/renta/verify-email',
    [AppRoutes.REGISTRATION]: '/registration',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.MAP]: '/map',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.INITIAL]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.renta,
        element: <MainPage/>,
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <RegistrationPage/>,
    },
    [AppRoutes.INITIAL]: {
        path: RoutePath.initial,
        element: <MainPage/>,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>,
    },
    [AppRoutes.MAP]: {
        path: RoutePath.map,
        element: <MapPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
    [AppRoutes.VERIFYEMAIL]: {
        path: `${RoutePath["verify-email"]}`,
        element: <VerifyEmailPage/>,
    },
};
