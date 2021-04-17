import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../layout/Header';

const MovieDetails = (props) => {
    const [imdbData, setImdbData] = useState([]);
    const [id] = useState(props.match.params.post_id);
    const imagePath = 'https://image.tmdb.org/t/p/original';
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                // `http://www.omdbapi.com/?i=${id}&plot=full&apikey=2ff9984a`
                `https://api.themoviedb.org/3/movie/${id}?api_key=7d7a6c7d574c704591e07f29b54b6b0b&language=en-US`
            );
            setImdbData(result.data);
        }

        fetchItems();
    }, [id])
    console.log(imdbData);
    return (
        <>
            <Header />
            <div className="movie-details">

                <div className="movie-details-img">
                    <img src={imagePath + imdbData.poster_path} alt="" />
                </div>
                <div className="movie-details-title">
                    <h1>{imdbData.original_title}</h1>
                    <h2>{imdbData.release_date}</h2>
                    {/* <h1>{imdbData.imdbRating}</h1> */}

                    {/* <h3>Actors: {imdbData.Actors}</h3> */}

                </div>
                <div className="movie-details-review">
                    <p>Rating: 9.0</p>
                    <p>Rating: 9.0</p>

                </div>
                <div className="movie-details-plot">
                    <p>{imdbData.overview}</p>
                </div>

            </div>
        </>
    )
}

export default MovieDetails;