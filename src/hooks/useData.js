import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url, random = false, single = false) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        axios(url, { signal: abortCont.signal })
            .then(response => {
                console.log(response.data);

                if(random){
                   setData(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]); 
                }

                if(single) {
                    setData(response.data);
                }

                if(!single && !random){
                    setData(response.data.results);
                }

                setIsLoading(false);
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                }
            });


        return () => abortCont.abort();

    }, [url, random, single]);


    return { data, isLoading };
}

export default useData;