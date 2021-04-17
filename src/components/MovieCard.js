import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    return (
        <div className="col">
            <div className="card" id={movie.id}>
                <div className="card-img" >
                    <img className="movie-poster shadow-sm" src={movie.poster_path ? imagePath + movie.poster_path : './imgs/Noimage.jpg'} alt={movie.title} />
                </div>
                <div className="card-content">
                    <Link className="card-content--title" to={'/' + movie.id}>{movie.title}</Link>
                    <p className="card-content--text">{movie.release_date && movie.release_date.slice(0, 4)}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;