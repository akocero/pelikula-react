import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url, random = false) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async () => {
            const response = await axios(url, { signal: abortCont.signal });

            if (random) {
                setData(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            } else {
                setData(response.data.results);
            }

            setIsLoading(false);
            return response;
        }

        getData();
        return () => {
            abortCont.abort();
            console.log('fetch aborted');
        };
    }, [url, random]);


    return { data, isLoading };
}

export default useData;