import React from 'react';
import Header from '../components/layout/Header';
import MovieContainer from '../components/MovieContainer';
import SearchMovie from '../components/SearchMovie';
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