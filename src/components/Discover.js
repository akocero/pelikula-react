import useData from '../hooks/useData';

const Discover = ({ title, fetchURL, poster }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original';

    const { data: movies, isLoading } = useData(fetchURL);
    console.log(movies);
    return (
        <div className="discover-row">
            <h2 className="discover_row--title">
                {title}
            </h2>
            <div className="discover-posters">
                {isLoading && <div> Loading... </div>}
                {movies?.map(movie =>
                    <img className={poster ? 'discover-poster poster' : 'discover-poster'} key={movie.id} src={poster ? imagePath + movie.poster_path : imagePath + movie.backdrop_path} alt={movie.id} />
                )}
            </div>

        </div >
    );
}

export default Discover;