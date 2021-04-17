import React, { useState, useEffect } from 'react';
import Discover from '../components/Discover';
import request from '../url/request';
import axios from '../url/axios';
import Header from '../components/layout/Header';
import Heading from '../components/Heading';

const HomePage = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const headerData = await axios.get(request.topAction);
            setMovie(headerData.data.results[Math.floor(Math.random() * headerData.data.results.length - 1)]);
            return headerData;
        }

        fetchData();

    }, []);

    return (
        <div className="home_page">
            <Header />
            {movie && <Heading movie={movie} />}
            <Discover title="Trending Now" fetchURL={request.trending} poster={true} />
            <Discover title="Top Action" fetchURL={request.topAction} poster={false} />
            <Discover title="Popular Movies" fetchURL={request.topPopular} poster={false} />
            <Discover title="Top Rated" fetchURL={request.topRated} poster={false} />
        </div>
    );
}

export default HomePage;