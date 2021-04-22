import { useState, useEffect } from 'react';
import axios from 'axios';

const useOMDB = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        axios(url, { signal: abortCont.signal })
            .then(response => {

                setData(response.data);
                setIsLoading(false);

            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                }else{
                    console.log(err.message);
                }
            });

        return () => abortCont.abort();

    }, [url]);


    return { data, isLoading };
}

export default useOMDB;