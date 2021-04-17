import React from 'react';


const Heading = ({ movie }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="header"
            style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(
                        to right, 
                        rgba(1, 1, 1, 0.80),
                        transparent), 
                        url(${imagePath + movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="row">
                <div className="col header-text-content">
                    <div className="text text-sm movie-year">
                        {
                            movie.release_date && movie.release_date.slice(0, 4)
                        }
                    </div>
                    <div className="text text-l movie-title">
                        {truncate(movie?.title || movie?.original_title, 30)}
                    </div>
                    <div className="text text-p movie-plot mb-4">
                        {truncate(movie?.overview, 200)}
                    </div>
                    <div className="text text-md movie-rating">
                    </div>
                </div>
                <div className="col"></div>

            </div>
            <div className="fade-effect"></div>
        </header>
    );
}

export default Heading;