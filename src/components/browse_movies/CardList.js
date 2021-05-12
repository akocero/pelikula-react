import Card from './Card';

const CardList = ({movies}) => {
    
    return (
        <div className="browse-movies__card-list">
            {movies.map(movie => <Card movie={movie} key={movie.id} />)}           
        </div>
    )

}

export default CardList;