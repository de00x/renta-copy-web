import axios from 'axios';
import {ILoginFormValues} from '../../types/login-page.types'

const web = 'https://flat-renta.test.madela.dev/users/api/v1'

export const onLogin = (value: ILoginFormValues) => {
    const dataToSend = {
        email: value.email,
        password: value.password
    }

    return axios.post(`${web}/auth/login`, dataToSend)
};
