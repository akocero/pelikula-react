import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';

const MovieContainer = () => {
    const { movies, isLoading, pageNumber, totalResults, setPageNumber } = useContext(MovieContext);
    const totalPages = Math.ceil(totalResults / 20);

    return (
        <>
            <div className="movie-container container">
                {movies.length > 0 && <div>Total results: {totalResults}</div>}
                <div className="row-movie-cards">

                    {movies.length > 0 && movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}

                    {movies.length <= 0 && <div className="no-results"><h3>No result found</h3></div>}

                    {isLoading && <div className="loading"><h3>Loading...</h3></div>}

                </div>
                {
                    totalPages !== parseInt(pageNumber) && movies.length > 0 &&
                    <div className="load-more">
                        <button className="btn" onClick={() => { setPageNumber(parseInt(pageNumber) + 1) }}>Load More</button>
                    </div>
                }
            </div>
        </>
    )

}

export default MovieContainer;