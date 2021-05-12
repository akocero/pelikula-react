import React, { useContext } from 'react';
import CardList from '../components/browse_movies/CardList';
import Search from '../components/browse_movies/Search';
import { MovieContext } from '../contexts/MovieContext';

const BrowseMovies = () => {
    const { movies, isLoading, pageNumber, totalResults, setPageNumber } = useContext(MovieContext);
    const defaultCount = 20;
    const totalPages = Math.ceil(totalResults / defaultCount);
    return (
        <div className="browse-movies">
            <Search />
            {/* {
                movies.length > 0 ? 
                <div>Total results: {totalResults}</div> : 
                <div className="no-results"><h3>No result found</h3></div>
            } */}

            {isLoading && <div className="loading"><h3>Loading...</h3></div>}
            
            {movies.length > 0 && <CardList movies={movies} />}
            
            {
                totalPages !== parseInt(pageNumber) && movies.length > 0 &&
                <div className="load-more">
                    <button className="btn" onClick={() => { setPageNumber(parseInt(pageNumber) + 1) }}>Load More</button>
                </div>
            }
        </div>
    );
}

export default BrowseMovies;