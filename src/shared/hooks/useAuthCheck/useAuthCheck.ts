import {ID_LOCALSTORAGE_KEY} from "shared/constants/localstorage";

export const useAuthCheck = () => {
    return !!localStorage.getItem(ID_LOCALSTORAGE_KEY);
}
