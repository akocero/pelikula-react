import Card from './Card';
import useData from '../hooks/useData';
import request from '../url/request';

const Cast = ({movie_id}) => {

    const { data, isLoading } = useData(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${request.apikey}&language=en-US`, false, true);

    return (
        <div className="cast">
            <h2 className="cast__title">
                Top Billed Cast
            </h2>
            <div className="cast-list">
                { isLoading && <div>Loading...</div> }
                {data && data.cast.map((person, i) => i < 9 && <Card key={person.id} person={person} />)}
                <a href="">View all</a>
            </div>
        </div>
    );
}

export default Cast;