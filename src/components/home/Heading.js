import React from 'react';
import ButtonPlayYT from '../ButtonPlayYT';

const Heading = ({ movie }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const backdrop_path = movie?.backdrop_path && imagePath + movie?.backdrop_path;

    return (
        <div className="header"
            style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(
                        to right, 
                        rgba(1, 1, 1, 0.80),
                        transparent), 
                        url(${backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="row">
                <div className="col header-text-content">
                    <div className="text text-sm movie-year mb-2">
                        {
                            movie?.release_date && movie.release_date.slice(0, 4)
                        }
                    </div>
                    <div className="text text-l movie-title mb-2">
                        {truncate(movie?.title || movie?.original_title, 30)}
                    </div>
                    <div className="text text-p movie-plot mb-4">
                        {truncate(movie?.overview, 200)}
                    </div>
                    {/* <div className="text text-md movie-rating">
                    </div> */}
                    <ButtonPlayYT movieID={movie?.id} />
                </div>
                <div className="col"></div>

            </div>
            <div className="fade-effect"></div>
        </div>
    );
}

export default Heading;