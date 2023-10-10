import {useLocation} from 'react-router-dom';

export const useIsCurrentPage = () => {
    const currentLocation = useLocation();

    const currentPageIsAuth = () => {
        return currentLocation.pathname === '/login' || currentLocation.pathname === '/registration';
    };

    const currentPageIsVerifyEmail = () => {
        return currentLocation.pathname === '/renta/verify-email'
    }

    return {currentPageIsAuth, currentPageIsVerifyEmail};
}
