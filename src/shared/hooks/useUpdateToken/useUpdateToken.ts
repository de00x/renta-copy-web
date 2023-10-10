import {$api} from "shared/api/api";
import {useNavigate} from "react-router-dom";
import {useDecodeIdUserJWT} from "shared/hooks";
import {REFRESH_LOCALSTORAGE_KEY} from "shared/constants/localstorage";

interface IUpdatedToken {
    access_token: string
    refresh_token: string
}

export const useUpdateToken = async (navigate: ReturnType<typeof useNavigate>) => {
    const refresh_token = localStorage.getItem(REFRESH_LOCALSTORAGE_KEY);

    try {
        const response = await $api.post('/auth/refresh-token', {refresh_token});
        updateCurrentToken(response.data, navigate);
    } catch (error) {
        errUpdateToken(navigate);
    }
};

const updateCurrentToken = (data: IUpdatedToken, navigate: ReturnType<typeof useNavigate>) => {
    const {access_token: currentAccessToken, refresh_token: currentRefreshToken} = data;
    const currentIdUser = useDecodeIdUserJWT(currentRefreshToken);

    localStorage.setItem('id_user', currentIdUser);
    localStorage.setItem('access_token', currentAccessToken);
    localStorage.setItem('refresh_token', currentRefreshToken);
};

const errUpdateToken = (navigate: ReturnType<typeof useNavigate>) => {
    navigate('/login');
    localStorage.clear();
};
