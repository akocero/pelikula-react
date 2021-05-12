import React from 'react';
import request from '../../url/request';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    return (
        <div className="browse-movies__card" id={movie.id}>
            <img className="browse-movies__card-img shadow-sm" src={movie.poster_path ? request.imagePath + movie.poster_path : './imgs/Noimage.jpg'} alt={movie.title} />

            {/* <div className="browse-movies__card-content">
                <Link className="browse-movies__card-title" to={'/' + movie.id}>{movie.title}</Link>
                <p className="browse-movies__card-text">{movie.release_date && movie.release_date.slice(0, 4)}</p>
            </div> */}
        </div>
    );
}

export default Card;