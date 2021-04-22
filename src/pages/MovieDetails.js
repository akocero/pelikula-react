import React, { useState } from 'react';
import Header from '../components/layout/Header';
import useOMDB from '../hooks/useOMDB';
import useData from '../hooks/useData';
import request from '../url/request';
import Loading from '../components/Loading';
import Cast from '../components/Cast';

const MovieDetails = (props) => {
    const [id] = useState(props.match.params.post_id);
    const { data, isLoading } = useData(`https://api.themoviedb.org/3/movie/${id}?api_key=${request.apikey}&language=en-US`, false, true);

    const { data: omdbData, isLoading: isOmdbLoading } = useOMDB(`http://www.omdbapi.com/?i=${data?.imdb_id}&plot=full&apikey=2ff9984a`);

    console.log(data);
    const backdrop_path = data?.backdrop_path && request.imagePath + data?.backdrop_path;
    return (
        <>
            <Header />
            { isLoading  && <Loading /> }
            { data  && <div className="movie-details" >
                
                <div className="row movie-details__header" style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${backdrop_path})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className="col">
                        <div className="movie-details__poster">
                            <img src={request.imagePath + data?.poster_path} alt=""/>
                        </div>
                    </div>
                    <div className="col">
                        <h1 className="movie-details__title pt-5">{ data.original_title } ({data.release_date?.substring(0,4)})</h1>

                        <p className="movie-details__sub-title mb-2">
                            <span className="certification">R</span> &nbsp;|&nbsp;&nbsp;
                            <span className="release">{data.release_date}</span> &nbsp;|&nbsp;&nbsp;
                            <span className="genres">{
                            data.genres.map((genre, i, arr) => 
                                arr.length - 1 === i ? genre.name : genre.name + ',   '
                            )}</span> &nbsp;|&nbsp;
                            <span className="runtime">{data.runtime} mins</span>
                        </p>

                        <div className="movie-details__rating">
                            <img src="./imgs/imdb_logo.svg" alt="" />
                            <h2 className="movie-details__imdb-rating pl-2">{omdbData.imdbRating}<span className="star  pl-1">&#9733;</span></h2>
                        </div>
                        
                        <h3 className="mt-5 mb-1 ">Overview</h3>

                        <p className="movie-details__overview">{data.overview}</p>

                        <div className="row mt-4">
                            <div className="col">
                                <h3 >{omdbData.Director}</h3>
                                <label htmlFor="">Director</label>
                            </div>
                            <div className="col">
                                <h3 >{data.status}</h3>
                                <label htmlFor="">Status</label>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>

                <div className="fade-effect"></div>
                


                        <Cast />

            </div>}
        </>
    )
}

export default MovieDetails;