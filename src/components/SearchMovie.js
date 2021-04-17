import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
const SearchMovie = () => {
    const { setQuery, setPageNumber } = useContext(MovieContext);

    const [name, setName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (name === '') {
            return false;
        }
        setPageNumber(1);
        setQuery(name);
    }
    return (
        <section className="container">
            <div className="form-movie-search py-5">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Search Movie Name</label>
                        <input type="text" placeholder="Type..." onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <button className="btn" type="submit">Search</button>
                </form>
            </div>
        </section>
    );
}

export default SearchMovie;