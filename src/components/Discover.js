import React, { useEffect, useState } from 'react';
import axios from '../url/axios';

const Discover = ({ title, fetchURL, poster }) => {
    const [movies, setMovies] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/original';
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL])

    return (
        <div className="discover-row">
            <h2 className="discover_row--title">
                {title}
            </h2>
            <div className="discover-posters">
                {movies.map(movie =>

                    <img className={poster ? 'discover-poster poster' : 'discover-poster'} key={movie.id} src={poster ? imagePath + movie.poster_path : imagePath + movie.backdrop_path} alt={movie.id} />
                )}
            </div>


        </div >
    );
}

export default Discover;