import React from 'react';
import Header from '../layout/Header';
import MovieContainer from '../MovieContainer';
import SearchMovie from '../SearchMovie';
const BrowseMovies = () => {
    return (
        <>
            <Header />
            <SearchMovie />
            <MovieContainer />
        </>
    );
}

export default BrowseMovies;