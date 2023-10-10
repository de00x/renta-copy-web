import {useEffect, useState} from 'react';
import axios from 'axios';

export const useGeolocation = () => {
    const [currentGeoLocation, setCurrentGeoLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const response = await axios.get(
                            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
                        );
                        setCurrentGeoLocation(response.data.address.city);
                    } catch (error) {
                        setError(error);
                    }
                },
                (error) => {
                    setError(error);
                }
            );
        } else {
            setError('Geolocation is not available');
        }
    }, []);
    // console.log('currentGeoLocation', currentGeoLocation)
    // console.log('error', error)
    return {currentGeoLocation, error};
};