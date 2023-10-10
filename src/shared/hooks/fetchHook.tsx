import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function useFetch(query: any, page: any, city: string) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await axios.get(`http://89.108.65.212:8081/renta/api/v1/flat/filter?city=${city}&page=${page}&size=10&sort=id`);
            await setList((prev) => [...prev, ...res.data]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [query, page]);

    useEffect(() => {
        sendQuery();
    }, [query, sendQuery, page]);

    return { loading, error, list };
}

export default useFetch;
