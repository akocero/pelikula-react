import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('avengers');

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchItems = async () => {

            setIsLoading(true)

            const result = await axios(
                `https://api.themoviedb.org/3/search/movie?api_key=7d7a6c7d574c704591e07f29b54b6b0b&query=${query}&page=${pageNumber}`,
                { signal: abortCont.signal }
            );

            if (!result.data.results) {
                setMovies([]);
            } else {
                pageNumber !== 1 ? setMovies(movies => [...movies, ...result.data.results]) : setMovies(result.data.results);
                setTotalResults(result.data.total_results);
            }

            // console.log(result.data);

            setIsLoading(false);

            return () => {
                abortCont.abort();
                console.log('fetch aborted');
            };

        }

        fetchItems();


    }, [query, pageNumber]);

    return (
        <MovieContext.Provider value={{ movies, isLoading, setQuery, totalResults, setPageNumber, pageNumber }}>
            {props.children}
        </MovieContext.Provider>

    )
}



export default MovieContextProvider;

