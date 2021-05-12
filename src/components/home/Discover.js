import useData from '../../hooks/useData';
import RadialProgressBar from '../RadialProgressBar'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Discover = ({ title, fetchURL, poster }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original';

    const { data: movies, isLoading } = useData(fetchURL);
    const [showDiscoverDetails, setShowDiscoverDetails] = useState(false)
    const [movie, setMovie] = useState(null);
    console.log(movies);

    const handleClick = (id) => {
        const movie = movies.find(movie => movie.id === id);
        setShowDiscoverDetails(true);
        console.log('eto', movie);
        setMovie(movie);
    }

    const closeDiscover = (e) => {
        e.preventDefault();
        setShowDiscoverDetails(false);
    }
    return (
        <>
            <div className="discover-row">
                <h2 className="discover_row--title">
                    {title}
                </h2>
                <div className="discover-posters">
                    {isLoading && <div> Loading... </div>}
                    {movies?.map(movie =>
                        <img onClick={() => handleClick(movie.id)} className={poster ? 'discover-poster poster' : 'discover-poster poster'} key={movie.id} src={poster ? imagePath + movie.poster_path : imagePath + movie.poster_path} alt={movie.id} />
                    )}
                </div>
                {movie &&
                    <div className={`discover-details ${showDiscoverDetails ? 'show' : ''}`}
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url(${imagePath + movie?.backdrop_path})`,
                            backgroundPosition: "top center",
                        }}>

                        <button href="#" className="discover-details__close-button" onClick={(e) => closeDiscover(e)}>&#10005;</button>
                        <h1 className="mb-2">{movie?.original_title} ({movie.release_date?.substring(0, 4)})</h1>

                        <div className="discover-details__content">
                            <div className="user-score">
                                <RadialProgressBar percent={movie?.vote_average} />
                                <h4 className="mt-1">User Score</h4>
                            </div>

                            <div className="pl-2">
                                <h3 className="mb-1">Synopsis</h3>
                                <p className="mb-2">{movie?.overview}</p>
                                <Link className="btn-link" to={'/' + movie?.id}>View more &#8599;</Link>
                            </div>

                        </div>

                    </div>
                }
            </div>

        </>
    );
}

export default Discover;