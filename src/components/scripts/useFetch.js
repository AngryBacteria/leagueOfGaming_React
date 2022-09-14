import { useState, useEffect } from 'react';

const useFetch = (url, objectName) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error(`${objectName.toUpperCase()} NOT FOUND`);
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    setData(null);
                    setIsPending(false);
                    setError(err.message);
                })
    }, [url, objectName])

    return { data, isPending, error };
}

export default useFetch;