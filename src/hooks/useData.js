import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url, random = false) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        axios(url, { signal: abortCont.signal })
            .then(response => {
                if (random) {
                    setData(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
                } else {
                    setData(response.data.results);
                }
                setIsLoading(false);
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                }
            });

        return () => abortCont.abort();

    }, [url, random]);


    return { data, isLoading };
}

export default useData;