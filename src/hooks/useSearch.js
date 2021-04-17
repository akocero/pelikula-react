import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = (searchQuery, pageNumber) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalResults, setTotalResults] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [searchQuery, setSearchQuery] = useState('avengers');
    // const [error, setError] = useState(null);

    useEffect(() => {

        const getData = async () => {
            const response = await axios(
                `https://api.themoviedb.org/3/search/movie?api_key=7d7a6c7d574c704591e07f29b54b6b0b&query=${searchQuery}&page=${pageNumber}`
            );

            if (!response.data.results) {
                setData([]);
            } else {
                pageNumber !== 1 ? setData(data => [...data, ...response.data.results]) : setData(response.data.results);
                setTotalResults(response.data.total_results);
            }

            setIsLoading(false);
            return response;
        }

        getData();
    }, [searchQuery, pageNumber]);


    return { data, isLoading, totalResults, pageNumber, searchQuery, setSearchQuery, setPageNumber };
}

export default useSearch;