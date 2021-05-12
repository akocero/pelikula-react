import Discover from '../components/home/Discover';
import request from '../url/request';
import Heading from '../components/home/Heading';
import useData from '../hooks/useData';
import Loading from '../components/Loading'

const HomePage = () => {

    const { data: movie, isLoading } = useData(request.topAction, true);
    return (
        
        <div className="home">
            {isLoading && <Loading />}
            {movie && <Heading movie={movie} />}
            <Discover title="Trending Now" fetchURL={request.trending} poster={true} />
            <Discover title="Top Action" fetchURL={request.topAction} poster={false} />
            <Discover title="Popular Movies" fetchURL={request.topPopular} poster={false} />
            <Discover title="Top Rated" fetchURL={request.topRated} poster={false} />
        </div>
    );
}

export default HomePage;