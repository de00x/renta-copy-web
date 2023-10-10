import {$api} from "shared/api/api";
import {Location} from 'react-router-dom'

export const onVerifyEmail = (location: Location) => {
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    return $api.get(`/auth/actions/verify-email?key=${key}`)
}